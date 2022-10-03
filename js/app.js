// console.log('Fear is the mind killer.');

const btn = document.querySelector('#nav-button');
const list = document.querySelector('#drop-down');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    list.classList.toggle('closed');
});