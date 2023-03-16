/**
 * Выбирает рандомное число из диапазона
 * @param {integer} min — минимальное число
 * @param {integer} max — максимальное число
 * @return {integer} — рандомное число
 */
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/**
 * Выбирает рандомное значение из массива
 * @param {element} element — элемент массива
 * @return {element} element — рандомный элемент
 */
const getRandomArrayElement = (element) => element[getRandomInteger(0, element.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

export {getRandomInteger, getRandomArrayElement, isEscapeKey, isEnterKey};
