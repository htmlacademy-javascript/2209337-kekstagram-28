import {isEscapeKey, isEnterKey} from './mocks/util.js';
import {renderPostPisture, cleanPostPicture} from './user-thumbnails.js';
import {} from './user-form';

const fullPicture = document.querySelector('.big-picture');
const openFullPicture = document.querySelector('.big-picture__img');
const cancelFullPicture = document.querySelector('.big-picture__cancel');

const onDocumentEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    cancelPicture ();
  }
};

function openPicture () {
  fullPicture.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentEscKeydown);
  renderPostPisture();
}

function cancelPicture () {
  fullPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentEscKeydown);
  cleanPostPicture();
}

openFullPicture.addEventListener('click', () => {
  openPicture ();
});

openFullPicture.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openPicture ();
  }
});

cancelFullPicture.addEventListener('click', () => {
  cancelPicture ();
});


