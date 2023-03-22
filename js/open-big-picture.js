import {isEscapeKey, isEnterKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeBigPicture = document.querySelector('.big-picture__cancel');

const commentList = document.querySelector('.social__comments');
const commentItem = document.querySelector('.social__comment');
const commentCount = document.querySelector('.social__comment-count');
const commentLoad = document.querySelector('.comments-loader');

/**
 * Генерация массива случайных комментариев
 * @param {object} getRandomComment объект с параметрами для комментариев
 * @returns {object}
 */
const renderComments = (getRandomComment) => {
  const commentFragment = document.createDocumentFragment;

  getRandomComment.forEach(({avatar, message, nameComment}) => {
    const comment = commentItem.cloneNode(true);

    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = message;
    comment.querySelector('.social__text').textContent = nameComment;
    commentFragment.appendChild(comment);
  });
  return commentFragment;
};

/**
 * Генерирует 5 случайных комментариев
 * @param {*object} comments случайные комментарии
 */
const showComments = (comments) => {
  const displayedComments = comments.slice(0, 5);
  const renderFirstComments = renderComments(displayedComments);

  commentCount.firstChild.textContent = `${displayedComments.length } из `;
  commentList.appendChild(renderFirstComments);

  if (displayedComments.length === comments.length) {
    commentLoad.classList('hidden');
  }
};

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePicture();
  }
};

const openBigPicture = ({url, likes, comments, description}) => {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentEscKeydown);

  const bigPicture = ({url,likes, comments, description}) => {
    bigPicture.querySelector('img').src = url;
    bigPicture.querySelector('.likes-count').textContent = likes;
    bigPicture.querySelector('.comments-count').textContent = comments.length;
    bigPicture.querySelector('.social__caption').textContent = description;
  };
  renderComments(getRandomComment);
  document.body.classList.add('modal-open');
  showComments(comments);
};

const closePicture = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentEscKeydown);
  document.body.classList.remove('modal-open');
};

bigPicture.addEventListener('click', () => {
  openBigPicture ();
});

bigPicture.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openBigPicture ();
  }
});

closeBigPicture.addEventListener('click', () => {
  closePicture ();
});

export {openBigPicture, closeBigPicture};
