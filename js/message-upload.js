import {isEscapeKey} from './util.js';

const onHideMessageEvent = (evt) => {
  if (isEscapeKey(evt) ||
    evt.target.matches('.success__button') ||
    evt.target.matches('.success') ||
    evt.target.matches('.error__button') ||
    evt.target.matches('.error')) {
    hideMessege();
  }
};

const errorMessageTemplate = document.querySelector('#error');
// Сообщение ошибки
const showAlert = () => {
  const newErrorMessageTemplate = errorMessageTemplate.cloneNode(true);
  document.body.append(newErrorMessageTemplate);
  const newErrorMessage = document.querySelector('.error');
  document.addEventListener('keydown', onHideMessageEvent);
  newErrorMessage.addEventListener('click', onHideMessageEvent);
};

const successMessageTemplate = document.querySelector('#success');
// Сообщение успеха
const showSuccess = () => {
  const newSuccessMessageTemplate = successMessageTemplate.content.cloneNode(true);
  document.body.append(newSuccessMessageTemplate);
  const newSuccessMessage = document.querySelector('.success');
  document.addEventListener('keydown', onHideMessageEvent);
  newSuccessMessage.addEventListener('click', onHideMessageEvent);
};

function hideMessege () {
  const successMessege = document.querySelector('.success');
  const errorMessege = document.querySelector('.error');
  if (successMessege) {
    successMessege.remove();
  }
  if (errorMessege) {
    errorMessege.remove();
  }
  document.removeEventListener('keydown', onHideMessageEvent);
}

export {showAlert, showSuccess};
