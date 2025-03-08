function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const controlsElement = document.getElementById('controls');
const inputNumberElement = controlsElement.querySelector('input');
const createButtonElement = controlsElement.querySelector('[data-create]');
const destroyButtonElement = controlsElement.querySelector('[data-destroy]');
const boxesContainerElement = document.getElementById('boxes');

createButtonElement.addEventListener('click', () => {
    const amount = parseInt(inputNumberElement.value, 10);
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        inputNumberElement.value = '';
    } else {
        alert('Please enter a number between 1 and 100');
    }
});

destroyButtonElement.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    const elements = [];
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        const size = 30 + i * 10;
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        elements.push(div);
    }
    boxesContainerElement.innerHTML = '';
    boxesContainerElement.append(...elements);
}

function destroyBoxes() {
    boxesContainerElement.innerHTML = '';
}
