import {showBigPicture} from './big-picture.js';

const thumbnailsWrapper = document.querySelector('.pictures');
const thumbnailsTemplate = document.querySelector('#picture').content;

/**
 * Отрисовавает миниатюры изображение и при клике открывает большое изображение
 * @parm {element} element — элементы массива
 */

const renderthumbnails = (similarPosts) => {
  const similarPostFragment = document.createDocumentFragment();

  similarPosts.forEach((url, comments, likes, description) => {
    const newPictureTemplate = thumbnailsTemplate.cloneNode(true);
    newPictureTemplate.querySelector('.picture__img').textContent = url;
    newPictureTemplate.querySelector('.picture__comments').textContent = comments.length;
    newPictureTemplate.querySelector('.picture__likes').textContent = likes;
    newPictureTemplate.querySelector('.social__caption').textContent = description;
    similarPostFragment.appendChild(newPictureTemplate);

    newPictureTemplate.addEventListener('click', () => {
      showBigPicture(url, comments, likes, description);
    });
  });

  thumbnailsWrapper.appendChild(similarPostFragment);
};

const cleanPostPicture = () => {
  thumbnailsWrapper.innerHTML = '';
};

export {renderthumbnails, cleanPostPicture};
