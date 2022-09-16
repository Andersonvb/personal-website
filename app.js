// Navbar Button

const navbarBtn = document.querySelector('.navbar__btn');

navbarBtn.addEventListener('click', () => {
    document.querySelector('.navbar__ul').classList.toggle('hidden');

});