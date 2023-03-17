import {createPostData} from './mocks/generate-post-data.js';
import {renderThumbnails} from './thumbnails.js';

const SIMILAR_POST_COUNT = 25;
const similarPosts = createPostData(SIMILAR_POST_COUNT);
renderThumbnails(similarPosts);

export {similarPosts};
