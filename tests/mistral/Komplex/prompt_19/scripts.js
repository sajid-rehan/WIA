let currentStep = 1;
let formGroups = document.querySelectorAll('.form-group');

function nextStep(event) {
 event.preventDefault();

 let isValid = true;
 let inputs = document.querySelectorAll(`#step${currentStep} input[required]`);

 for (const input of inputs) {
 if (!input.checkValidity()) {
 isValid = false;
 break;
 }
 }

 if (isValid) {
 currentStep++;
 document.getElementById('nextButton').innerText = 'Weiter';
 hidePrevSteps();
 showNextSteps();
 }
}

function showNextSteps() {
 for (let i = currentStep + 1; i <= formGroups.length; i++) {
 formGroups[i - 1].style.display = "initial";
 }
}

function hidePrevSteps() {
 for (let i = 0; i < currentStep; i++) {
 formGroups[i].style.display = "none";
 }
}