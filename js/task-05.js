const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
console.log(nameOutput);
console.log(nameInput);

nameInput.addEventListener('input', foo);

function foo(evt) {
  nameInput.value === ''
    ? (nameOutput.textContent = 'Anonymous')
    : (nameOutput.textContent = nameInput.value);
}
