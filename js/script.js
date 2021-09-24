// ________________ VARIABLES ________________

let toggleSwitch = document.querySelector('.slider');  


// ________________ VARIABLES ________________  

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



// ________________ MENÚ HAMBURGUESA ________________ 
  
// ________________ MODO OSCURO ________________  

const modoOscuro = () => {
  let elemento = document.body;
  elemento.classList.toggle('modo-oscuro');
}

toggleSwitch.addEventListener('click', modoOscuro);


// ________________ MODO OSCURO ________________  


// ________________ DESLIZADOR ________________  

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activo", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activo";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// ________________ DESLIZADOR ________________  