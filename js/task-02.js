const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const firstEl = document.createElement('li')
// console.log(firstEl)
// firstEl.textContent= 'Potatoes';
// firstEl.classList.add('item');
const ul = document.querySelector('#ingredients');
// console.log(ul);
// ul.append(firstEl)

const fooo = array => {
  let aa = [];
  array.forEach((element, index) => {
    aa.push(document.createElement('li'));
    aa[index].textContent = array[index];
    aa[index].classList.add('item');
  });
  ul.append(...aa);
};

fooo(ingredients);
