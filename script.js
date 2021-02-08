const menuIcon = document.querySelector('.hamburguesa');
const navbar = document.querySelector('.navigation__bar');
const icons = document.querySelector('.icons');

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('change');
    navbar.classList.toggle('change');
    icons.classList.toggle('change');
});