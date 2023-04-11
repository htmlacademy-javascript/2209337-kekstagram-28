import {isEscapeKey} from './util.js';
import {sendData} from './api.js';
import {pristine} from './pristine.js';
import {showAlert, showSuccess} from './message-upload.js';

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};
const submitButton = document.querySelector('.img-upload__submit');

// Блокировка кнопки отправки
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};
//Разблокировка кнопки отправки
const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const uploadForm = document.querySelector('#upload-select-image');
// Отправка формы
const setUploadForm = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isPristineValidate = pristine.validate();
    if (isPristineValidate) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(
          showSuccess(),
          onSuccess,
        )
        .catch(
          (err) => {
            showAlert(err.messege);
          }
        )
        .finally(() => {
          unblockSubmitButton();
        });
    }
  });
};

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadFormPicture();
  }
};

const imgEditing = document.querySelector('.img-upload__overlay');
const formElement = document.querySelector('.img-upload__form');

// Открытие окна загрузки
const openUploadFormPicture = () => {
  formElement.addEventListener('change', () => {
    imgEditing.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });
  document.addEventListener('keydown', onDocumentEscKeydown);
};

const scaleUploadImg = document.querySelector('.img-upload__preview img');

function closeUploadFormPicture () {
  imgEditing.classList.add('hidden');
  document.body.classList.remove('modal-open');
  scaleUploadImg.style.transform = 'none';
}

const uploadCancelElement = document.querySelector('.img-upload__cancel');

uploadCancelElement.addEventListener('click', () => {
  closeUploadFormPicture();
});

export {openUploadFormPicture, setUploadForm};
