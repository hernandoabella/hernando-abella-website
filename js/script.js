// Scripts by Hernando Abella

// ________________ VARIABLES ________________

let toggleSwitch = document.querySelector('.slider'); 
let burger = document.querySelector('.menu__hamburguesa');
let panel = document.querySelector('.ul');

// ________________ VARIABLES ________________  

// ________________ EFECTO DE TIPADO ________________  

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Hernando', 'Diseñador', 'Artista'];
const typingDelay = 150;
const erasingDelay = 90;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(!(cursorSpan.classList.contains('typing'))) {
        cursorSpan.classList.add('typing');
    }
    // if last letter of a word is not typed
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(!(cursorSpan.classList.contains('typing'))) {
        cursorSpan.classList.add('typing');
    }
    // if string is not entirely erased
    if(charIndex > 0) { 
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    if(textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }
})

// ________________ EFECTO DE TIPADO ________________  


// ________________ STICK NAV ONSCROLL ________________  

window.onscroll = function() {myFunction2()};

var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function myFunction2() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.style.boxShadow = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px';
    
  } else {
    navbar.classList.remove("sticky");
  }
}

// ________________ STICK NAV ONSCROLL ________________  


// ________________ MENÚ HAMBURGUESA ________________

burger.addEventListener('click', () => {
  burger.classList.toggle('change');
  panel.classList.toggle('change');
});

// ________________ MENÚ HAMBURGUESA ________________ 
  