const logregBox = document.querySelector('.box');
const loginLink = document.querySelector('.loglink');
const registerLink = document.querySelector('.reglink');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});