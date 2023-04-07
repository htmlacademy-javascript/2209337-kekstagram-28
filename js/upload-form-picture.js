import {isEscapeKey, showAlert} from './util.js';
import {sendData} from './api.js';

const HASHTAG_VALID_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_MAX_NUMBERS = 5;
const COMMENT_MAX_LENGTH = 140;
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};
const submitButton = document.querySelector('.img-upload__submit')

// Инизиализация Pristine.js
const uploadForm = document.querySelector('#upload-select-image');
const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
});
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

// Отправка формы
const setUploadForm = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isPristineValidate = pristine.validate();
    if (isPristineValidate) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(
          (err) => {
            showAlert(err.messege);
          }
        )
        .finally(unblockSubmitButton);
    }
  });
};

const hashtagsElement = document.querySelector('.text__hashtags');

//Валидация хэштегов
const hashtagValidate = () => {
  const hashtagArray = hashtagsElement.value.toLowerCase().trim().split(' ');
  const newHashtagArray = new Set(hashtagArray);
  if (hashtagArray.length !== newHashtagArray.length) {
    hashtagsElement.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
  } else if (!hashtagsElement.value) {
    hashtagsElement.setCustomValidity('');
    return false;
  } else if (hashtagArray.length > HASHTAG_MAX_NUMBERS) {
    hashtagsElement.setCustomValidity(`нельзя указать больше ${HASHTAG_MAX_NUMBERS} хэш-тегов`);
  }

  for (let i = 0; i < hashtagArray.length; i++) {
    if (!HASHTAG_VALID_REGEX.test(hashtagArray[i])) {
      hashtagsElement.setCustomValidity('хэш-тег начинается с символа # (решётка) строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д. максимальная длина одного хэш-тега 20 символов, включая решётку');
      return false;
    } else {
      hashtagsElement.setCustomValidity('');
    }
  }
  hashtagsElement.reportValidity();
};

const commentsElement = document.querySelector('.text__description');

//Валидация комменария
const commentsValiate = () => {
  const commentsLength = commentsElement.value.length;

  if (commentsLength > COMMENT_MAX_LENGTH) {
    commentsElement.setCustomValidity(`длина комментария не может составлять больше ${COMMENT_MAX_LENGTH} символов`);
  } else {
    commentsElement.setCustomValidity('');
  }
};

const formValidate = () => {
  pristine.addValidator(
    commentsElement,
    commentsValiate
  );

  pristine.addValidator(
    hashtagsElement,
    hashtagValidate
  );
};

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadFormPicture();
  }
};

const imgEditing = document.querySelector('.img-upload__overlay');
const formElement = document.querySelector('#upload-file');

// Открытие окна загрузки
const openUploadFormPicture = () => {
  formElement.addEventListener('click', () => {
    imgEditing.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });
  document.addEventListener('keydown', onDocumentEscKeydown);
  closeUploadFormPicture ();
};

const uploadCancelElement = document.querySelector('.img-upload__cancel');
const scaleUploadImg = document.querySelector('.img-upload__preview img');

function closeUploadFormPicture () {
  uploadCancelElement.addEventListener('click', () => {
    imgEditing.classList.add('hidden');
    document.body.classList.remove('modal-open');
    scaleUploadImg.style.transform = 'none';
  });
}

export {openUploadFormPicture, formValidate, setUploadForm};
