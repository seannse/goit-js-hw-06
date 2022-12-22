const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const items = ingredients.map((el) => {
  const item = document.createElement("li");
  item.textContent = el;
  item.classList.add('item');

  return item;
});

list.append(...items);