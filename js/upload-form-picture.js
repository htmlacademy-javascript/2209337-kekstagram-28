import {isEscapeKey} from './util.js';
import {sendData} from './api.js';
import {pristine} from './pristine.js';
import {showAlertUpload, showSuccess} from './message-upload.js';
import {cleanEffect} from './effects.js';

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
          closeUploadFormPicture(),
          showSuccess(),
          onSuccess,
        )
        .catch(
          (err) => {
            showAlertUpload(err.messege);
          }
        )
        .finally(() => {
          unblockSubmitButton();
        });
    }
  });
};

const onClickDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadFormPicture();
  }
};

const imgEditing = document.querySelector('.img-upload__overlay');
const formElement = document.querySelector('.img-upload__form');
const scaleUploadImg = document.querySelector('.img-upload__preview');
const imgFile = scaleUploadImg.querySelector('img');
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const imgInput = document.querySelector('.img-upload__input');
const scaleValue = document.querySelector('.scale__control--value');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

// Открытие окна загрузки
const openUploadFormPicture = () => {
  formElement.addEventListener('change', () => {
    const file = imgInput.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      imgFile.src = URL.createObjectURL(file);
    }
    imgEditing.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onClickDocumentEscKeydown);
  });
};

function closeUploadFormPicture () {
  imgEditing.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onClickDocumentEscKeydown);
  scaleUploadImg.style.transform = '';
  scaleValue.value = '100%';
  cleanEffect();
  imgInput.value = '';
  hashtagInput.value = '';
  commentInput.value = '';
}

const uploadCancelElement = document.querySelector('.img-upload__cancel');

uploadCancelElement.addEventListener('click', () => {
  closeUploadFormPicture();
});

export {openUploadFormPicture, setUploadForm};
