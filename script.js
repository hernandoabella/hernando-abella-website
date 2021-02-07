const menuIcon = document.querySelector('.hamburguesa');
const navbar = document.querySelector('.navigation__bar');

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('change');
    navbar.classList.toggle('change');
});