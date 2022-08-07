const rangeFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

rangeFontSize.addEventListener('input', changeFontSize);

function changeFontSize(evt) {
  const size = rangeFontSize.value;
  console.log(size);
  text.style.fontSize = size + 'px';
}
