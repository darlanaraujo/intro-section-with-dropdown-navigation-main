const dropdown = document.querySelectorAll('.dropdown');

dropdown.forEach((item) => {

    item.addEventListener('click', () => {
        item.nextElementSibling.classList.toggle('active');
    });
});