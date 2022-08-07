const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', processingForm);

function processingForm(evt) {
  evt.preventDefault();
  const elementsForm = evt.currentTarget.elements;

  if (elementsForm.email.value === '' || elementsForm.password.value === '') {
    alert('Увага, всі поля повинні бути заповнені !!');
    return;
  }

  const formatDate = new FormData(evt.currentTarget);

  const objForm = {};
  formatDate.forEach((value, name) => {
    objForm[name] = value;
  });
  console.log(objForm);
  formEl.reset();
}
