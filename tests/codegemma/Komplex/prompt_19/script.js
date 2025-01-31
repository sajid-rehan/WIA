const steps = document.querySelectorAll('fieldset');
const progress = document.getElementById('progress');

let currentStep = 1;

function nextStep(step) {
  steps[step - 1].style.display = 'none';
  steps[step].style.display = 'block';
  progress.style.width = (step / steps.length) * 100 + '%';
  currentStep = step;
}

function prevStep(step) {
  steps[step].style.display = 'none';
  steps[step - 1].style.display = 'block';
  progress.style.width = ((step - 1) / steps.length) * 100 + '%';
  currentStep = step - 1;
}