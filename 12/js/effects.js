const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const optionEffectElement = document.querySelectorAll('.effects__radio');

valueElement.value = 100;

const examplesEffect = {
  grayscale: {
    range: {
      min: 0,
      max: 1,
    },
    start: 100,
    step: 0.1,
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    start: 100,
    step: 0.1,
  },
  invert: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },
  blur: {
    range: {
      min: 0,
      max: 3,
    },
    start: 100,
    step: 0.1,
  },
  brightness: {
    range: {
      min:1,
      max: 3,
    },
    start: 100,
    step: 0.1,
  }
};

//Функция для выбора эффекта
const getEffect = (nameEffect, sliderValue) => {
  const effectStyle = {
    GRAYSCALE: `filter: grayscale(${sliderValue})`,
    SEPIA: `filter: sepia(${sliderValue})`,
    INVERT: `filter: invert(${sliderValue}`,
    BLUR: `filter: blur(${sliderValue}`,
    BRIGHTNESS: `filter: brightness(${sliderValue}`,
  };
  return effectStyle[nameEffect];
};

sliderElement.noUiSlider.on('update', () => {
  const slidrValue = sliderElement.noUiSlider.get();
  valueElement.value = slidrValue;
  getEffect(slidrValue);
});

optionEffectElement.addEventListener('change', (evt) => {
  optionEffectElement.forEach((element) => element);
  const currentEffect = evt.target.value;
  sliderElement.noUiSlider.updateOptions(examplesEffect[currentEffect]);
});

export {optionEffectElement};
