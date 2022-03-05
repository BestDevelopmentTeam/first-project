//* Navbar
const nav = document.querySelector(".nav");
const openBtn = document.querySelector(".navbar__menu-icon");
const closeBtn = document.querySelector(".nav__menu-close");

openBtn.addEventListener('click',() => {
    nav.classList.add("open");
});
closeBtn.addEventListener('click',() => {
    nav.classList.remove("open");
});