const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('active');
});
