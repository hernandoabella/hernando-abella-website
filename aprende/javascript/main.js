function openNav() {
    document.getElementById("course__sidebar").style.transform = "translate(0px)";
}

function closeNav() {
    document.getElementById("course__sidebar").style.transform = "translate(-300px)";
}

function darkSide(){
  var ladoOscuro, cuerpo;

  ladoOscuro = document.querySelector('.darkSide');
  cuerpo = document.querySelector('body');

  ladoOscuro.classList.toggle('dark');
  cuerpo.classList.toggle('dark');
}

function irAtras(){
  document.location.href = "../";
}

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction(); myFunction();}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Filtrar lista


// Acordión
var acc = document.getElementsByClassName("accordion");
var e;
var panel = document.querySelector('.panel');
var i;
var a = document.getElementsByTagName('a');


for (e = 0; e < acc.length; e++) {
  acc[e].addEventListener("click", function() {
    this.classList.toggle("active");
    for (j = 0; j < acc.length; j++) {
      if (j !== i)
        acc[j].nextElementSibling.style.maxHeight = null;
    }
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var panelDOM = document.querySelectorAll('.panel');

// Abrir acordión desde la navegación
for (let i = 0; i < a.length; i++){
  a[i].addEventListener("click", function(){
    acc[i].classList.toggle('active');
    for (j = 0; j < acc.length; j++) {
      if (j !== i)
        acc[j].nextElementSibling.style.maxHeight = null;
    }
    if (panelDOM[i].style.maxHeight) {
      panelDOM[i].style.maxHeight = null;
    } else {
      panelDOM[i].style.maxHeight = panelDOM[i].scrollHeight + "px";
    }
    
  });
}
