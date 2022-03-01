let tarjeta, entrada, filtro, i, titulo, texto;

const filtrar = () => {
  tarjeta = document.querySelectorAll('.tarjeta__proyectos');
  entrada = document.getElementById('myInput').value;
  filtro = entrada.toUpperCase();

  for(i = 0; i < tarjeta.length; i++){
    titulo = tarjeta[i].getElementsByTagName('h3')[0];
    texto = titulo.textContent || titulo.innerText;
    if(texto.toUpperCase().indexOf(filtro) > -1){
      tarjeta[i].style.display = "";
    }else{
      tarjeta[i].style.display = "none";
    }
  }

}
