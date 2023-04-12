import {renderThumbnails} from './thumbnails.js';
import {initScale} from './scale.js';
import {openUploadFormPicture, setUploadForm} from './upload-form-picture.js';
import {selectEffects} from './effects.js';
import {getData} from './api.js';
import {init, getFilteredPictures} from './filters.js';
import {debounce} from './util.js';
import {showAlertNetwork} from './message-upload.js';

initScale();
openUploadFormPicture();
setUploadForm();
selectEffects();

getData()
  .then((picture) => {
    const debounceRenderPictures = debounce(renderThumbnails);
    init(picture, debounceRenderPictures);
    renderThumbnails(getFilteredPictures());
  })
  .catch(
    (errorText) => {
      showAlertNetwork((errorText));
    });
