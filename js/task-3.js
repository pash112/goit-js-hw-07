const nameInputElement = document.querySelector('#name-input');
const nameOutputElement = document.querySelector('#name-output');

nameInputElement.addEventListener('input', event => {
    const trimmedValue = event.target.value.trim();
    nameOutputElement.textContent = trimmedValue || 'Anonymous';
});
