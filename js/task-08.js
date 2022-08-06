const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', foo);

function foo(evt) {
  evt.preventDefault();
  const elementsForm = evt.currentTarget.elements;

  if (elementsForm.email.value === '' || elementsForm.password.value === '') {
    alert('Увага, всі поля повинні бути заповнені !!');
  }

  const formatDate = new FormData(evt.currentTarget);

  const obj = {};
  formatDate.forEach((value, name) => {
    obj[name] = value;
  });
  console.log(obj);
  formEl.reset();
}
