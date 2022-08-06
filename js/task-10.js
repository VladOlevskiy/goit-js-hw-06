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
btnCreat.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function getAmountOfEl(evt) {
  amountOfEl = Number(evt.currentTarget.value);
}

function createBoxes(evt) {
  for (let i = 0; i < amountOfEl; i += 1) {
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
  for (let i = 0; i < amountOfEl; i += 1) {
    document.querySelector('.div').remove();
  }
  arrayDiv = [];
}
