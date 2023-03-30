import {isEscapeKey} from './util.js';

const MAX_COMMENTS_NUMBER = 5;

const commentTemplateElement = document.querySelector('.social__comment');
/**
 * Отрисовка комментария для поста
 * @param {object[]} массив всех комментариев для поста
 * @returns {object} кусок разметки
 */
const renderComment = ({avatar, message, nameComment}) => {
  const comment = commentTemplateElement.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = message;
  comment.querySelector('.social__text').textContent = nameComment;

  return comment;
};

const commentListElement = document.querySelector('.social__comments');
const commentCountElement = document.querySelector('.social__comment-count');
const commentLoadButton = document.querySelector('.comments-loader');
/**
 * Отрисовывает первые пять комментариев
 * @param {object[]} comments все комментарии поста
 */
const renderComments = (allComments) => {
  const firstComments = allComments.slice(0, MAX_COMMENTS_NUMBER);
  const commentFragment = document.createDocumentFragment;
  firstComments.forEach((comment) => {
    const commentElement = renderComments(comment);
    commentFragment.appendChild(commentElement);
  });
  commentListElement.appendChild(commentFragment);

  commentCountElement.firstChild.textContent = `${firstComments.length} из ${allComments.length}`;

  // Проверка на все ли комментарии отрисованы -> Показываем\убираем кнопку
  if (firstComments === allComments) {
    commentLoadButton.classList.remove('hidden');
  } else if (firstComments < allComments) {
    commentLoadButton.addEventListener('click', () => {
      const followComments = allComments.slice(0, MAX_COMMENTS_NUMBER);
      const commentFragmentFollow = document.createDocumentFragment;
      followComments.forEach((comment) => {
        const commentElementFollow = renderComments(comment);
        commentFragmentFollow.appendChild(commentElementFollow);
      });
      commentListElement.appendChild(commentFragmentFollow);

      commentCountElement.firstChild.textContent = `${followComments.length} из ${allComments.length}`;
    });
  }
  // Если усть кнопка, вешаем событие на отрисовку остальных комменатриев (внутри этой функции проверка показывать или убирать кнопк дальше)
};

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePicture();
  }
};

const bigPictureElement = document.querySelector('.big-picture');

const openBigPicture = ({url, likes, comments, description}) => {
  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureElement.querySelector('img').src = url;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.comments-count').textContent = comments.length;
  bigPictureElement.querySelector('.social__caption').textContent = description;

  renderComments(comments);

  document.addEventListener('keydown', onDocumentEscKeydown);
};

function closePicture () {
  bigPictureElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentEscKeydown);
  document.body.classList.remove('modal-open');
}

const closeBigPicture = document.querySelector('.big-picture__cancel');

closeBigPicture.addEventListener('click', () => {
  closePicture ();
});

export {openBigPicture, closeBigPicture};
