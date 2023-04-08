const errorMessageTemplate = document.querySelector('#error');
const errorButton = document.querySelector('.error__button');

const isEscapeKey = (evt) => evt.key === 'Escape';

// Сообщение ошибки
const showAlert = () => {
  const newErrorMessageTemplate = errorMessageTemplate.cloneNode(true);
  document.body.append(newErrorMessageTemplate);
  errorButton.addEventListener('click', () => {
    newErrorMessageTemplate.remove();
  });
  document.addEventListener('click', () => {
    newErrorMessageTemplate.remove();
    document.addEventListener.remove();
  });
  // const onEscKeydown = (evt) => {
  //   if (isEscapeKey(evt)) {
  //     newErrorMessageTemplate.remove();
  //   }
  // };
};

const successMessegeTemplate = document.querySelector('#success');
const successButton = document.querySelector('.success__button');

const showSuccess = () => {
  const newSuccessMessegeTemplate = successMessegeTemplate.cloneNode(true);
  document.body.append(newSuccessMessegeTemplate);
  successButton.addEventListener('click', () => {
    newSuccessMessegeTemplate.remove();
  });
  document.addEventListener('click', () => {
    newSuccessMessegeTemplate.remove();
    document.addEventListener.remove();
  });
};

export {isEscapeKey, showAlert, showSuccess};
