function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const containerEl = document.querySelector('#boxes');
const btnCreat = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
let amountOfEl;
let arrayDiv = [];

inputEl.addEventListener('input', getAmountOfEl);
btnCreat.addEventListener('click', clickToCreat);
btnDestroy.addEventListener('click', destroyBoxes);

function getAmountOfEl(evt) {
  amountOfEl = Number(evt.currentTarget.value);
}
function clickToCreat(evt) {
  createBoxes(amountOfEl);
}
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    arrayDiv.push(div);
    div.classList.add('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${i * 10 + 30}px`;
    div.style.height = `${i * 10 + 30}px`;
  }
  containerEl.append(...arrayDiv);
}

function destroyBoxes() {
  containerEl.textContent = '';
  arrayDiv = [];
}
