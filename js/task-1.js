const categories = document.querySelector('#categories');

const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const title = item.querySelector('h2').textContent;

    const elementsCount = item.querySelectorAll('li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
});
