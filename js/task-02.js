const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const addElements = array => {
  let arrayOfEl = [];
  array.forEach((element, index) => {
    arrayOfEl.push(document.createElement('li'));
    arrayOfEl[index].textContent = array[index];
    arrayOfEl[index].classList.add('item');
  });
  listEl.append(...arrayOfEl);
};

addElements(ingredients);
