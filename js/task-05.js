const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', addNameToInput);

function addNameToInput(evt) {
  nameInput.value === ''
    ? (nameOutput.textContent = 'Anonymous')
    : (nameOutput.textContent = nameInput.value);
}
