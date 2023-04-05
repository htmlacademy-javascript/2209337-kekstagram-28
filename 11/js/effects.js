const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const imgUploadElement = document.querySelector('.img-upload__preview');
const optionEffectElement = document.querySelector('.effects__radio');

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

/**
 * Функция для выбора эффекта
 */
const choiceEffect = (slidrValue) => {
  const effectStyle = {
    GRAYSCALE: `filter: grayscale(${slidrValue})`,
    SEPIA: `filter: sepia(${slidrValue})`,
    INVERT: `filter: invert(${slidrValue}`,
    BLUR: `filter: blur(${slidrValue}`,
    BRIGHTNESS: `filter: brightness(${slidrValue}`,
  };
};

sliderElement.noUiSlider.on('update', () => {
  const slidrValue = sliderElement.noUiSlider.get();
  valueElement.value = slidrValue;
  choiceEffect(slidrValue);
});

optionEffectElement.addEventListener('change', (evt) => {
  evt.target.checked;
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: MIN,
      max: MAX,
    },
    start: START,
    step: STEP,
  });
})
