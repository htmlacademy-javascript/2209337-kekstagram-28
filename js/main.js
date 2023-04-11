import {renderThumbnails} from './thumbnails.js';
import {initScale} from './scale.js';
import {openUploadFormPicture, setUploadForm} from './upload-form-picture.js';
import {selectEffects} from './effects.js';
import {getData} from './api.js';
import {init, getFilteredPictures} from './filters.js';
import {debounce} from './util.js';

// const SIMILAR_POST_COUNT = 25;

initScale();
openUploadFormPicture();
setUploadForm();
selectEffects();

getData()
  .then((picture) => {
    const debounceRenderPictures = debounce(renderThumbnails);
    init(picture, debounceRenderPictures);
    renderThumbnails(getFilteredPictures());
  });
// renderThumbnails(picture.slice(0, SIMILAR_POST_COUNT));
