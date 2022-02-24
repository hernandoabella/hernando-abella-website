// botones para compartir proyectos
let compartir = document.querySelector('.compartir');
let copiarLink = document.querySelector('.copy-link');


const showShareBox = () => {
 
}

const copiarEnlace = () => {
  let url = window.location.href;
  let stringURL = url.toString();
  navigator.clipboard.writeText(url);
  copiarLink.innerHTML = '¡Enlace copiado!';
  console.log('¡Enlace copiado!');
}

const outFunc = () => {
  copiarLink.innerHTML = 'Copiar enlace';
}

compartir.addEventListener('click', showShareBox);
copiarLink.addEventListener('click', copiarEnlace);
copiarLink.addEventListener('mouseout', outFunc);
