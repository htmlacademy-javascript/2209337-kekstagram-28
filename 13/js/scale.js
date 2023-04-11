const MAX_SCALE_VALUE = 100;
const MIN_SCALE_VALUE = 25;
const STEP_VALUE = 25;

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const scaleUploadImg = document.querySelector('.img-upload__preview');

/**
 * @param (value) значение масштаба выбраное пользователем
 * @returns значение записаное в стили
 */
const setScaleToPicture = () => {
  const currentValue = parseFloat(scaleValue.value);
  scaleUploadImg.style.transform = `scale(${currentValue / 100})`;
};

const onClickSmallerButton = () => {
  const currentValue = parseFloat(scaleValue.value);

  if (currentValue === MIN_SCALE_VALUE) {
    return false;
  }
  scaleValue.value = `${currentValue - STEP_VALUE}%`;
  setScaleToPicture();
};

const onClickBiggerButton = () => {
  const currentValue = parseFloat(scaleValue.value);

  if (currentValue === MAX_SCALE_VALUE) {
    return false;
  }

  scaleValue.value = `${currentValue + STEP_VALUE}%`;
  setScaleToPicture();
};

const initScale = () => {
  scaleSmallerButton.addEventListener('click', onClickSmallerButton);
  scaleBiggerButton.addEventListener('click', onClickBiggerButton);
};

export {initScale};
