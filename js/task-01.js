const listItemsEl = document.querySelectorAll('li.item');
// console.log(listItemsEl);
const listItemsAmount = `Number of categories: ${listItemsEl.length}`;
console.log(listItemsAmount);

const liEl = document.querySelectorAll('li.item');
const array1 = Array.from(liEl);
// console.log(liEl[0].firstElementChild.textContent)
const aa = array => {
  array.map((element, index) => {
    console.log(`Category: ${array[index].firstElementChild.textContent}`);
    console.log(`Elements: ${array[index].lastElementChild.children.length}`);
  });
};
aa(array1);
