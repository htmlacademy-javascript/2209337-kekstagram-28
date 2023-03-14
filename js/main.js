import {createPostData} from './mocks/generate-post-data.js';
import {renderThumbnails} './user-thumbnails.js';

const SIMILAR_POST_COUNT = 25;
const similarPosts = createPostData(SIMILAR_POST_COUNT);
renderThumbnails(similarPosts);
