import {getRandomInteger, getRandomArrayElement} from './util-mocks.js';

const DESCRIPTION = [
  'Сегодня был здесь',
  'Отдохнули с друзьями',
  'Хорошие впечатления',
  'Весело провели время',
  'Отличный денёк',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'Мария',
  'Валентина',
  'Клавдия',
  'Алексей',
  'Инокентий',
  'Кирилл',
];

/**
 * Генерация данных для комментариев поста (объект)
 * @return {Object} — комментарий поста
 */
const getRandomComment = () => ({
  id: getRandomInteger(1, 500),
  avatar: `img/avstar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  nameComment: getRandomArrayElement(NAME),
});

/**
 * Генерация данных одного поста (объект)
 * @return {Object} — объект поста
 */
const generatePostData = () => ({
  id: getRandomInteger(1, 25),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 10)}, getRandomComment),
});

/**
 * Генерация постов
 * @param {number} count количeство генерируемых постов
 * @returns {Array} массив постов
 */
const createPostData = (count) => Array.from({ length: count }, generatePostData);

export {createPostData};
