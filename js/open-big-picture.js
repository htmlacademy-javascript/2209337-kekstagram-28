import {isEscapeKey} from './util.js';

let commentCount = 0;
let commentsList;

const MAX_COMMENTS_NUMBER = 5;

const commentTemplateElement = document.querySelector('.social__comment');

const renderComment = ({avatar, nameComment, message}) => {
  const comment = commentTemplateElement.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = `Изображение пользователя ${nameComment}`;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const commentListElement = document.querySelector('.social__comments');
const commentCountElement = document.querySelector('.social__comment-count');
const commentLoadButton = document.querySelector('.comments-loader');

const renderComments = (allComments) => {
  const firstComments = allComments.slice(0, MAX_COMMENTS_NUMBER);
  commentCount += firstComments.length;
  const commentFragment = document.createDocumentFragment();
  firstComments.forEach((comment) => {
    const commentElement = renderComment(comment);
    commentFragment.appendChild(commentElement);
  });
  commentListElement.appendChild(commentFragment);

  commentCountElement.firstChild.textContent = `${commentCount} из `;
};

const onLoadCommentsClick = () => {
  const followComments = commentsList.slice(commentCount, commentCount + MAX_COMMENTS_NUMBER);
  renderComments(followComments);
  if (commentsList.length === commentCount) {
    commentLoadButton.classList.add('hidden');
  }
};

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePicture();
  }
};

const bigPictureElement = document.querySelector('.big-picture');

const openBigPicture = ({url, likes, comments, description}) => {
  commentsList = comments.slice(0, comments.length);
  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentListElement.innerHTML = '';
  bigPictureElement.querySelector('img').src = url;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.comments-count').textContent = comments.length;
  bigPictureElement.querySelector('.social__caption').textContent = description;

  renderComments(commentsList.slice(0, MAX_COMMENTS_NUMBER));

  if (commentsList <= MAX_COMMENTS_NUMBER) {
    commentLoadButton.classList.add('hidden');
  } else {
    commentLoadButton.addEventListener('click', onLoadCommentsClick);
    commentLoadButton.classList.remove('hidden');
  }
  document.addEventListener('keydown', onDocumentEscKeydown);
};

function closePicture () {
  bigPictureElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentEscKeydown);
  document.body.classList.remove('modal-open');
  commentLoadButton.removeEventListener('click', onLoadCommentsClick);
  commentCount = 0;
}

const closeBigPicture = document.querySelector('.big-picture__cancel');

closeBigPicture.addEventListener('click', () => {
  closePicture ();
});

export {openBigPicture, closeBigPicture};
