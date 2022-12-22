const categoryItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);
console.log('');

categoryItems.forEach(el => {
    console.log(`Category: ${el.querySelector('h2').textContent}`);
    console.log(`Elements: ${el.querySelectorAll('li').length}`);
    console.log('');
});