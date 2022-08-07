const inputEl = document.querySelector('#validation-input');
const allowedLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', validatesInput);

function validatesInput(evt) {
  let inputLength = inputEl.value.length;
  if (inputLength < allowedLength || inputLength > allowedLength) {
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.replace('invalid', 'valid');
  }
}
