const listItemsEl = document.querySelectorAll('li.item');
const listItemsAmount = `Number of categories: ${listItemsEl.length}`;
console.log(listItemsAmount);

const liEl = document.querySelectorAll('li.item');
const arrayOfLi = Array.from(liEl);
const getTitleAndAmount = array => {
  array.map((element, index) => {
    console.log(`Category: ${array[index].firstElementChild.textContent}`);
    console.log(`Elements: ${array[index].lastElementChild.children.length}`);
  });
};
getTitleAndAmount(arrayOfLi);
