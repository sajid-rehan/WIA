import os
import re
import subprocess

from prompts import prompts
from llms import LLMs

# Directory to save results
results_dir = "llm_results"
os.makedirs(results_dir, exist_ok=True)


def parse_verbose_output(output):
    """
    Extract metrics from Ollama's --verbose output.

    Args:
        output (str): The verbose output from which to extract metrics.

    Returns:
        dict: A dictionary containing the extracted metrics with the following keys:
            - total_duration (str): Total duration of the process.
            - load_duration (str): Duration taken to load the model.
            - prompt_eval_count (str): Number of tokens evaluated during the prompt.
            - prompt_eval_duration (str): Duration of prompt evaluation.
            - prompt_eval_rate (str): Rate of token evaluation during the prompt.
            - eval_count (str): Total number of tokens evaluated.
            - eval_duration (str): Duration of the evaluation.
            - eval_rate (str): Rate of token evaluation.

    Note:
        If a metric is not found in the output, its value will be "N/A".
    """
    patterns = {
        "total_duration": r"total duration:\s+([\d\.]+[a-z]+)",
        "load_duration": r"load duration:\s+([\d\.]+[a-z]+)",
        "prompt_eval_count": r"prompt eval count:\s+(\d+) token\(s\)",
        "prompt_eval_duration": r"prompt eval duration:\s+([\d\.]+[a-z]+)",
        "prompt_eval_rate": r"prompt eval rate:\s+([\d\.]+) tokens/s",
        "eval_count": r"eval count:\s+(\d+) token\(s\)",
        "eval_duration": r"eval duration:\s+([\d\.]+[a-z]+)",
        "eval_rate": r"eval rate:\s+([\d\.]+) tokens/s",
    }

    metrics = {}
    for key, pattern in patterns.items():
        match = re.search(pattern, output)
        metrics[key] = match.group(1) if match else "N/A"

    return metrics


def run_ollama(llm: str, prompt: str) -> tuple[str, str]:
    """
    Runs Ollama with --verbose and captures both stdout and stderr.

    Args:
        llm (str): The name of the LLM to use.
        prompt (str): The prompt to evaluate.

    Returns:
        tuple[str, str]: A tuple containing the stdout and stderr outputs
            from the command.
    """
    cmd = ["ollama", "run", llm, prompt, "--verbose"]
    process = subprocess.Popen(
        cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True
    )
    stdout, stderr = process.communicate()

    return stdout, stderr


def main():
    # Test all LLMs with all prompts
    for llm in LLMs:
        llm_results_dir = os.path.join(results_dir, llm)
        os.makedirs(llm_results_dir, exist_ok=True)

        for i, (prompt, difficulty) in enumerate(prompts):
            prompt_dir = os.path.join(llm_results_dir, difficulty, f"prompt_{i + 10}")
            os.makedirs(prompt_dir, exist_ok=True)

            print(f"Testing {llm} with Prompt {i + 10} ({difficulty}): {prompt}")
            response_output, verbose_output = run_ollama(llm, prompt)

            # Save the original response
            with open(
                os.path.join(prompt_dir, "response.txt"), "w", encoding="utf-8"
            ) as f:
                f.write(response_output)

            # Extract and save metrics from verbose output
            metrics = parse_verbose_output(verbose_output)
            with open(
                os.path.join(prompt_dir, "metrics.txt"), "w", encoding="utf-8"
            ) as f:
                for key, value in metrics.items():
                    f.write(f"{key}: {value}\n")

            print(f"Results saved to {prompt_dir}\n")

    print("Testing completed. Results saved in the 'llm_results' directory.")


if __name__ == "__main__":
    main()
