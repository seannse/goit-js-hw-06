function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

refs.button.addEventListener('click', () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = getRandomHexColor();
})
