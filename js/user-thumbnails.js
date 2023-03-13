import {createPostData} from './generate-post-data.js';

const pictureAll = document.querySelector('.picture');
const pictureImg = pictureAll.querySelector('#picture').content.querySelector('.picture__img');
const pictureComments = pictureAll.querySelector('#picture').content.querySelector('.picture__comments');
const pictureLikes = pictureAll.querySelector('#picture').content.querySelector('.picture__likes');

const similarPost = createPostData();

const similarPostFragment = document.createDocumentFragment();

similarPost.forEach( function(url, comments, likes) {
  const pictureElementImg = pictureImg.cloneNode(true);
  const pictureElementComments = pictureComments.cloneNode(true);
  const pictureElementLikes = pictureLikes.cloneNode(true);

  pictureElementImg.querySelector('.picture__img').textContent = url;
  pictureElementComments.querySelector('.picture__comments').textContent = comments;
  pictureElementLikes.querySelector('.picture__likes').textContent = likes;

});

similarPostFragment.appendChild(similarPostFragment);
