// Navbar Button

const navbarBtn = document.querySelector('.navbar__btn');

navbarBtn.addEventListener('click', () => {
  document.querySelector('.navbar__ul').classList.toggle('top-93');
  document.querySelector('.main-page').classList.toggle('margin-top-152');
});