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

//Get the button
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

//filtrar lista

function filtrarLista() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("entrada");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}