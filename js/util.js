const errorMessageTemplate = document.querySelector('#error');
const errorButton = document.querySelector('.error__button');

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

// Сообщение ошибки
const showAlert = () => {
  const newErrorMessageTemplate = errorMessageTemplate.cloneNode(true);
  document.body.append(newErrorMessageTemplate);
  errorButton.addEventListener('click', () => {
    newErrorMessageTemplate.remove();
  });
};

export {isEscapeKey, isEnterKey, showAlert};
