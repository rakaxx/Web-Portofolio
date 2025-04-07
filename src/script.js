function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const icon = document.getElementById("burgerIcon");

    menu.classList.toggle("active");

    // Ganti ikon
    if (menu.classList.contains("active")) {
        icon.src = "src/icons/close.png";
        icon.style.width = "1.5rem";
    } else {
        icon.src = "src/icons/burger-bar.png";
        icon.style.width = "2rem";
    }
}