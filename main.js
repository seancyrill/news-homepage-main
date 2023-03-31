const openMenuButton = document.querySelector(".open-menu");
const closeMenuButton = document.querySelector(".close-menu");
const popupMenu = document.querySelector('.menu');
const cover = document.querySelector('.cover');

openMenuButton.addEventListener('click', () =>  openMenu())
closeMenuButton.addEventListener('click', () =>  closeMenu())
cover.addEventListener('click', () =>  closeMenu())

function openMenu() {
    popupMenu.style.transform = "translateX(-100%)"
    cover.style.display = 'block'
}

function closeMenu() {
    popupMenu.style.transform = "translateX(0%)"
    cover.style.display = 'none'
}
