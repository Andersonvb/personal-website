// Navbar Button

const navbarBtn = document.querySelector('.navbar__btn');

navbarBtn.addEventListener('click', () => {
    document.querySelector('.navbar__ul').classList.toggle('down-152-top');
    document.querySelector('.main-page').classList.toggle('down-152-margin');
});