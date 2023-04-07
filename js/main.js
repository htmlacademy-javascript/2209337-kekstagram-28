// import {createPostData} from './mocks/generate-post-data.js';
import {renderThumbnails} from './thumbnails.js';
import {initScale} from './scale.js';
import {openUploadFormPicture, formValidate} from './upload-form-picture.js';
// import {optionEffectElement} from './effects.js';
import {getData} from './api.js';

const SIMILAR_POST_COUNT = 25;

initScale();
openUploadFormPicture();
formValidate();
// optionEffectElement();

getData()
  .then((picture) => {
    renderThumbnails(picture.slice(0, SIMILAR_POST_COUNT));
  });
