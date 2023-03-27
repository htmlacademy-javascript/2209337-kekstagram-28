const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const imgUploadElemrnt = document.querySelector('.img-upload__preview');
const optionEffectElement = document.querySelector('.effects__radio');

valueElement.value = 100;

noUiSlider.create(sliderElement, {
  range {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 0.1,
  connect: 'lower',
  format: {
    to:
  }
});

sliderElement.noUiSlider.on('update', (...rest) => {
  valueElement.value = sliderElement.noUiSlider.get();
});

optionEffectElement.addEventListener('change', (evt) => {
  evt.target.checked;
  sliderElement.noUiSlider.updateOptions({
    range {
      min: ;
      max: ;
    }
    step: ;
    start: 100;
  })
});
