const menuBurger = document.getElementById('burger-menu');
const menuList = document.getElementById('menu-list');

menuBurger.addEventListener('click', () => {
    menuList.classList.toggle("hidden");
});