function creatGeneratorInteger(min, max) {
  let generatorInteger = min + Math.random() * (max + 1 - min);
  return Math.floor(generatorInteger);
}

function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomArrayElement(element) {
  element[getRandomInteger(0, element.length - 1)];
};

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

// function getRandomComments(id, avatar, message, nameComment) {
//   const id = getRandomInteger(1, 500);
//   const avatar = 'img/avstar- ' + getRandomInteger(1, 6) + ' .svg';
//   const message = getRandomArrayElement(MESSAGE);
//   const nameComment = getRandomArrayElement(NAME);
// }

function photoDescription() ({
  id: creatGeneratorInteger(1, 25),
  url: 'photos/ ' + creatGeneratorInteger(1, 25) + ' .jpg',
  description: getRandomArrayElement(DESCRIPTION),
  like: getRandomInteger(15, 200),
});
console.log(photoDescription());
