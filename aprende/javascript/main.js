// abre la navegacion lateral
function openNav() {
    document.getElementById("course__sidebar").style.transform = "translate(0px)";
}

// cierra la navegacion lateral izquierda
function closeNav() {
    document.getElementById("course__sidebar").style.transform = "translate(-300px)";
}

// modo oscuro
function darkSide(){
  var ladoOscuro, cuerpo;

  ladoOscuro = document.querySelector('.darkSide');
  cuerpo = document.querySelector('body');

  ladoOscuro.classList.toggle('dark');
  cuerpo.classList.toggle('dark');
}

// cambiar icono de modo oscuro al hacer clic


// Acordión
var acc = document.getElementsByClassName("accordion");
var e;
var panel = document.querySelector('.panel');
var i;
var a = document.getElementsByTagName('a');

for (e = 0; e < acc.length; e++) {
  acc[e].addEventListener("click", function() {
    this.classList.toggle("active");
    // for() {

    // }
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
        acc[j].classList.remove('active');
        acc[j].nextElementSibling.style.maxHeight = null;
    }
    if (panelDOM[i].style.maxHeight) {
      panelDOM[i].style.maxHeight = null;
    } else {
      panelDOM[i].style.maxHeight = panelDOM[i].scrollHeight + "px";
    }
    
  });
}


// busqueda por filtro

function buscarNav(){
  var entrada, filtro, anchor, v, valorText;
  entrada = document.getElementById('miEntrada');
  filtro = entrada.value.toUpperCase();
  anchor = document.getElementsByTagName('a');

  for(v = 0; v < anchor.length; v++){
    valorText = anchor[v].textContent || anchor[v].innerText;
    if(valorText.toUpperCase().indexOf(filtro) > -1){
      anchor[v].style.display = "";
    }else{
      anchor[v].style.display = "none";
    }
  }
}

