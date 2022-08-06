let counterValue = 0;

const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

function toIncremet() {
  counterValue = counterValue + 1;
  valueEl.textContent = counterValue;
}

function toDecrement() {
  counterValue = counterValue - 1;
  valueEl.textContent = counterValue;
}

incrementEl.addEventListener('click', toIncremet);
decrementEl.addEventListener('click', toDecrement);
