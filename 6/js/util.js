/**
 * Выбирает рандомное число из диапазона
 * @param {integer} min — минимальное число
 * @param {integer} max — максимальное число
 * @return {integer} — рандомное число
 */

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

/**
 * Выбирает рандомное значение из массива
 * @param {} element — элемент массива
 * @return {} element — рандомный элемент
 */
function getRandomArrayElement(element) {
  return element[getRandomInteger(0, element.length - 1)];
}

export {getRandomInteger, getRandomArrayElement};
