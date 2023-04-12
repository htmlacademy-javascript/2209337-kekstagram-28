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
const showAlertUpload = () => {
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

const ALERT_SHOW_TIME = 5000;

const showAlertNetwork = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {showAlertUpload, showSuccess, showAlertNetwork};
