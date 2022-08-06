const rangeFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

rangeFontSize.addEventListener('input', foo);

function foo(evt) {
  const size = rangeFontSize.value;
  console.log(size);
  text.style.fontSize = size + 'px';
}
