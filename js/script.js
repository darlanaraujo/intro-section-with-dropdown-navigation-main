const dropdown = document.querySelectorAll('.dropdown');


dropdown.forEach((item) => {

    item.addEventListener('click', (event) => {
        item.nextElementSibling.classList.toggle('active');
        event.target.classList.toggle('active');
    });
});