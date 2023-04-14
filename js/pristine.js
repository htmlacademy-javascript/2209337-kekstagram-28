const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const COMMENT_MAX_LENGTH = 140;
const HASHTAG_MAX_COUNT = 5;

const HASHTAG_VALID_REGEX = /^#[a-zа-яё0-9]{1,19}$/;
const HASHTAG_FIRST_SYMBOL = /^#/;
const HASHTAG_CONTENT = /[a-zа-яё0-9]/;

const ERROR_HASHTAG_REPEAT = 'Хэштеги не должны повторяться';
const ERROR_HASHTAG_COUNT = 'Хэштегов может быть не более 5 штук';
const ERROR_HASHTAG_START = 'Хэштег должен начинаться с "#"';
const ERROR_HASHTAG_CONTENT = 'Хэштег должен содержать только буквы латинского и русского алфавита или цифры';
const ERROR_HASHTAG_LENGTH = 'Хэштег должен быть от 1 до 19 символов';

const isValidHashtags = (hashtags) => {
  if (!hashtags) {
    return true;
  }
  const hashtagArray = hashtags.replace(/^ +| +$|( ) +/g,'$1').toLowerCase().trim().split(' ');
  const newHashtagArray = new Set(hashtagArray);
  if (newHashtagArray.size === hashtagArray.length && hashtagArray.length <= HASHTAG_MAX_COUNT) {
    return hashtagArray.every((hashtag) => HASHTAG_VALID_REGEX.test(hashtag));
  }
};

const getErrorMessage = (hashtags) => {
  const hashtagArray = hashtags.toLowerCase().trim().split(' ');
  const newHashtagArray = new Set(hashtagArray);
  if (hashtagArray.length > HASHTAG_MAX_COUNT) {
    return ERROR_HASHTAG_COUNT;
  }
  if (newHashtagArray.size !== hashtagArray.length) {
    return ERROR_HASHTAG_REPEAT;
  }
  if (newHashtagArray.size === hashtagArray.length && hashtagArray.length <= HASHTAG_MAX_COUNT) {
    for (let i = 0; i <= hashtagArray.length; i++) {
      if (!(HASHTAG_FIRST_SYMBOL.test(hashtagArray[i]))) {
        return ERROR_HASHTAG_START;
      }
      if (!(HASHTAG_CONTENT.test(hashtagArray[i]))) {
        return ERROR_HASHTAG_CONTENT;
      }
      if (hashtagArray[i].length < 2 && hashtagArray[i].length > 20) {
        return ERROR_HASHTAG_LENGTH;
      }
    }
  }
};

const isValidComment = (comment) => comment.length <= COMMENT_MAX_LENGTH;

const formUpload = document.querySelector('.img-upload__form');

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextClass:'img-upload__field-wrapper--error',
});

pristine.addValidator(hashtagInput, isValidHashtags, getErrorMessage);
pristine.addValidator(commentInput, isValidComment, 'Длина комментария должна быть не более 140 символов');

export {pristine};
