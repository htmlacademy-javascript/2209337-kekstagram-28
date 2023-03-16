const bigPictureTemplate = document.querySelector('.big-picture');

const renderBigPicture = () => {
  const bigPictureFragment = document.createDocumentFragment();

  similarPostBigPicture.forEach((url, comments, likes) => {
    const newBigPictureTemplate = bigPictureTemplate.cloneNode(true);
    newBigPictureTemplate.querySelector('.big-picture__img').textContent = url;
    newBigPictureTemplate.querySelector('.likes-count').textContent = likes;
    newBigPictureTemplate.querySelector('.comments-count').textContent = comments;
  });

  bigPictureTemplate.appendChild(bigPictureFragment);
};

const cleanBigPicture = () => {
  bigPictureTemplate.innerHTML = '';
};

export {renderBigPicture, cleanBigPicture};
