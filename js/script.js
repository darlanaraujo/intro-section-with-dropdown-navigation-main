const dropdown = document.querySelectorAll('.dropdown');


dropdown.forEach((item) => {

    item.addEventListener('click', (event) => {
        item.nextElementSibling.classList.toggle('active');
        event.target.classList.toggle('active');
    });
});

const menuMobile = document.querySelectorAll('.menu-mobile');
const page = document.querySelector('.page');
const wrapperMobile = document.querySelector('.wrapper-menu-mobile');

menuMobile.forEach((item) => {
    item.addEventListener('click', () => {
        page.classList.toggle('active');
    wrapperMobile.classList.toggle('active');
    });
});

