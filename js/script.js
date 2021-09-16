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
  } else {
    navbar.classList.remove("sticky");
  }
}

// ________________ STICK NAV ONSCROLL ________________  


// ________________ MENÚ HAMBURGUESA ________________  

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// ________________ MENÚ HAMBURGUESA ________________ 
  
// ________________ MODO OSCURO ________________  

const cambiarFondo = () => {
  let elemento = document.body;
  elemento.classList.toggle('modo-oscuro');
}

toggleSwitch.addEventListener('click', cambiarFondo);


// ________________ MODO OSCURO ________________  