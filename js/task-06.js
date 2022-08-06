const inputEl = document.querySelector('#validation-input');
const maxLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', foo);

function foo(evt) {
  const realLength = inputEl.value.length;

  if (realLength <= maxLength) {
    inputEl.classList.add('valid');
  } else inputEl.classList.remove('valid');
  if (realLength > maxLength) {
    inputEl.classList.add('invalid');
  } else inputEl.classList.remove('invalid');
}
