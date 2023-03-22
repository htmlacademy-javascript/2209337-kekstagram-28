const formFilters = document.querySelector('.img-filters__form');
const formImgUpload = document.querySelector('.img-upload__form');
const imgEditing = document.querySelector('.img-upload__overlay');
const hashtagsInput = document.querySelector('.text__hashtags');
const commentsInput = document.querySelector('.text__description');
const HASHTAG_VALID_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_MAX_NUMBERS = 5;
const COMMENT_MAX_LENGTH = 140;

new Pristine(formFilters);
new Pristine(formImgUpload);

formFilters.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValidFilters = Pristine.validate();
  if (isValidFilters) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

formFilters.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValidImgUpload = Pristine.validate();
  if (isValidImgUpload) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});

const hashtagValidate = () => {
  const hashtagArray = hashtagsInput.value.toLowerCase().trim().split(' ');
  const newHashtagArray = new Set(hashtagArray);

  if (!hashtagsInput.value) {
    hashtagsInput.setCustomValidity('');
    return false;
  }

  for (let i = 0; i < hashtagArray.length; i++) {
    if (!HASHTAG_VALID_REGEX.test(hashtagArray[i])) {
      hashtagsInput.setCustomValidity('хэш-тег начинается с символа # (решётка) строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д. максимальная длина одного хэш-тега 20 символов, включая решётку');
      return false;
    } else if (hashtagArray.length > HASHTAG_MAX_NUMBERS) {
      hashtagsInput.setCustomValidity(`нельзя указать больше ${HASHTAG_MAX_NUMBERS} хэш-тегов`);
    } else if (hashtagArray.length !== newHashtagArray.size) {
      hashtagsInput.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
    } else {
      hashtagsInput.setCustomValidity('');
    }
  }
  hashtagsInput.reportValidity();
};

const commentsValiate = () => {
  const commentsLength = commentsInput.value.length;

  if (commentsLength > COMMENT_MAX_LENGTH) {
    commentsInput.setCustomValidity(`длина комментария не может составлять больше ${COMMENT_MAX_LENGTH} символов`);
  } else {
    commentsInput.setCustomValidity('');
  }
};

const openUploadFormPicture = () => {
  imgEditing.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

const closeUploadFormPicture = () => {
  imgEditing.classList.add('hidden');
  document.body.classList.remove('modal-open');
}
