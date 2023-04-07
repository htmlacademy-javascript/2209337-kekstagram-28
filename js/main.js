// import {createPostData} from './mocks/generate-post-data.js';
import {renderThumbnails} from './thumbnails.js';
import {initScale} from './scale.js';
import {openUploadFormPicture, formValidate} from './upload-form-picture.js';
// import {optionEffectElement} from './effects.js';

const SIMILAR_POST_COUNT = 25;
// const similarPosts = createPostData(SIMILAR_POST_COUNT);
initScale();
openUploadFormPicture();
formValidate();
// optionEffectElement();

fetch ('https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((picture) => {
    renderThumbnails(picture.slice(0, SIMILAR_POST_COUNT));
  });
