function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls').firstElementChild,
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  div: document.querySelector('#boxes'),
};

const createBoxes = function (amount) {
  const items = [...Array((Number(amount)) + 1).keys()].slice(1).map((el) => {
    const item = document.createElement("div");
    item.style.backgroundColor = getRandomHexColor()
    
    if (!refs.div.lastElementChild) {
      item.style.height = `${30 + 10 * (el - 1)}px`
      item.style.width = `${30 + 10 * (el - 1)}px`
    } else {
      item.style.height = `${ Number.parseInt(refs.div.lastElementChild.style.height) +10*el }px`
      item.style.width = `${ Number.parseInt(refs.div.lastElementChild.style.width) +10*el }px`
    }
    
    return item;
  });

  return refs.div.append(...items);
};

const removeBoxes = function () {
  refs.div.innerHTML = '';
  refs.input.value = '';
};

refs.createBtn.addEventListener('click', () => createBoxes(refs.input.value));
refs.destroyBtn.addEventListener('click', removeBoxes);


