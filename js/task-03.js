const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
// const liEl = document.createElement('li');
// const imgEl = document.createElement('img');
// liEl.appendChild(imgEl)
// imgEl.src = images[1].url;
// imgEl.alt = images[1].alt;
// console.log(imgEl)
// galleryEl.appendChild(liEl)

// const galleryEl = document.querySelector('body');
// console.log(galleryEl)
// const eee = `<li><img src="${images[0].url}" alt="${images[0].alt}"></li>`;
// console.log(eee);
// const abc = "acb"

// galleryEl.insertAdjacentHTML("beforeend",eee);

const foo = array => {
  images.forEach((image, index) => {
    const eee = `<li class="list_item"><img src="${image.url}" alt="${image.alt}" width=450 ></li>`;
    console.log(eee);

    galleryEl.insertAdjacentHTML('beforeend', eee);
  });
};

foo(images);
