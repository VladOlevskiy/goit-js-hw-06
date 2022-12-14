function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

btnChangeColor.addEventListener('click', changeColor);

function changeColor(evt) {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
}
