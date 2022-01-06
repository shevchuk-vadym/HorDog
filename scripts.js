const button = document.querySelector('.nav');
const mobMenu = document.querySelector('.mobile');
const mobMenuClose = document.querySelector('.mobile_close');

button.addEventListener('click', () => {
  mobMenu.style.display = 'block';
});
mobMenuClose.addEventListener('click', () => {
  mobMenu.style.display = 'none';
});

console.log('hi');
