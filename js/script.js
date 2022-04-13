window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__list');
    const menuItem = document.querySelectorAll('.menu__item');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger__active');
        menu.classList.toggle('menu__list__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('burger__active');
            menu.classList.toggle('menu__list__active');
        })
    })
})