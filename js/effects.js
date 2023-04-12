const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: ''
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  }
];

const DEFAULT_EFFECT = EFFECTS[0];
let currentEffect = DEFAULT_EFFECT;

const imageUploadElement = document.querySelector('.img-upload__preview img');
const effectsElement = document.querySelector('.effects');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const valueElement = document.querySelector('.effect-level__value');
// Создание слайдера
noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

const isDefault = () => currentEffect === DEFAULT_EFFECT;
// Показ слайдера
const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};
// Скрытие слайдера
const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};
// Обновление слайдера
const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range : {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.max,
  });

  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imageUploadElement.className = `effects__preview--${currentEffect.name}`;
  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  if (isDefault()) {
    imageUploadElement.style.filter = DEFAULT_EFFECT.style;
  } else {
    imageUploadElement.style.filter = `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  }
  valueElement.value = sliderValue;
};

const selectEffects = () => {
  currentEffect = DEFAULT_EFFECT;
  updateSlider();
};

const cleanEffect = () => {
  imageUploadElement.style.filter = 'none';
  valueElement.value = '100%';
  currentEffect = DEFAULT_EFFECT;
};

hideSlider();

effectsElement.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {selectEffects, cleanEffect};
