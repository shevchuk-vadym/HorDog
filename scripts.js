const button = document.querySelector('.nav_mobile');
const mobMenu = document.querySelector('.mobile');
const mobMenuClose = document.querySelector('.mobile_close');

button.addEventListener('click', () => {
  mobMenu.style.display = 'block';
});
mobMenuClose.addEventListener('click', () => {
  mobMenu.style.display = 'none';
});
