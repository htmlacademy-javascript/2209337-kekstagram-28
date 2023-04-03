import {openBigPicture} from './open-big-picture.js';

const thumbnailsWrapper = document.querySelector('.pictures');
const thumbnailsTemplate = document.querySelector('#picture').content;

/**
 * Отрисовавает миниатюры изображение и при клике открывает большое изображение
 * @parm {element} element — элементы массива
 */
const renderThumbnails = (similarPosts) => {
  const similarPostFragment = document.createDocumentFragment();

  similarPosts.forEach((similarPost) => {
    const {url, comments, likes} = similarPost;
    const newPictureTemplate = thumbnailsTemplate.cloneNode(true);
    newPictureTemplate.querySelector('.picture__img').src = url;
    newPictureTemplate.querySelector('.picture__comments').textContent = comments.length;
    newPictureTemplate.querySelector('.picture__likes').textContent = likes;

    newPictureTemplate.querySelector('.picture__img').addEventListener('click', () => {
      openBigPicture(similarPost);
    });
    similarPostFragment.appendChild(newPictureTemplate);
  });
  thumbnailsWrapper.appendChild(similarPostFragment);
};

const cleanPostPicture = () => {
  thumbnailsWrapper.innerHTML = '';
};

export {renderThumbnails, cleanPostPicture};
