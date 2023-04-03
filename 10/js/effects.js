const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const imgUploadElemrnt = document.querySelector('.img-upload__preview');
const optionEffectElement = document.querySelector('.effects__radio');

valueElement.value = 100;

const examplesEffect = {
  GRAYSCALE: {
    RANGE: {
      MIN: 0,
      MAX: 1,
    },
    START: 100,
    STEP: 0.1,
  },
  SEPIA: {
    RANGE: {
      MIN: 0,
      MAX: 1,
    },
    START: 100,
    STEP: 0.1,
  },
  INVERT: {
    RANGE: {
      MIN: 0,
      MAX: 100,
    },
    START: 100,
    STEP: 1,
  },
  BLUR: {
    RANGE: {
      MIN: 0,
      MAX: 3,
    },
    START: 100,
    STEP: 0.1,
  },
  BRIGHTNESS: {
    RANGE: {
      MIN:1,
      MAX: 3,
    },
    START: 100,
    STEP: 0.1,
  }
}

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
  }
}

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
