const picturesWrapper = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const renderPostPisture = () => {
  const similarPostFragment = document.createDocumentFragment();

  /**
   * @parm {element} element — элемент массива
   */
  similarPosts.forEach((url, comments, likes) => {
    const newPictureTemplate = pictureTemplate.cloneNode(true);
    newPictureTemplate.querySelector('.picture__img').textContent = url;
    newPictureTemplate.querySelector('.picture__comments').textContent = comments.length;
    newPictureTemplate.querySelector('.picture__likes').textContent = likes;
    similarPostFragment.appendChild(newPictureTemplate);
  });

picturesWrapper.appendChild(similarPostFragment);
};

const cleanPostPicture = () => {
  picturesWrapper.innerHTML = '';
};

export {renderPostPisture, cleanPostPicture};
