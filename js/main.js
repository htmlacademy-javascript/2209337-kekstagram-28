import {renderThumbnails} from './thumbnails.js';
import {getInitScale} from './scale.js';
import {openUploadFormPicture, setUploadForm} from './upload-form-picture.js';
import {selectEffects} from './effects.js';
import {getData} from './api.js';
import {getInit, getFilteredPictures} from './filters.js';
import {debounce} from './util.js';
import {showAlertNetwork} from './message-upload.js';

getInitScale();
openUploadFormPicture();
setUploadForm();
selectEffects();

getData()
  .then((picture) => {
    const debounceRenderPictures = debounce(renderThumbnails);
    getInit(picture, debounceRenderPictures);
    renderThumbnails(getFilteredPictures());
  })
  .catch(
    (errorText) => {
      showAlertNetwork((errorText));
    });
