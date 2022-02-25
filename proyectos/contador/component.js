// botones para compartir proyectos
const compartir = document.querySelector('.compartir');
const copiarLink = document.querySelector('.copy-link');
const cajaCompartir = document.querySelector('.share-box');
const html = document.querySelector('html');
const clsBtn = document.querySelector('.closebtn');
const showShareBox = (e) => {
  cajaCompartir.classList.toggle('transformActive');
}

const copiarEnlace = () => {
  let url = window.location.href;
  let stringURL = url.toString();
  navigator.clipboard.writeText(url);
  copiarLink.innerHTML = '¡Enlace copiado!';
  console.log('¡Enlace copiado!');
}

const outFunc = () => {
  copiarLink.innerHTML = '<i class="fa fa-clipboard"></i> ' + 'Copiar enlace';
}

window.onclick = function(e) {
  if(e.target == cajaCompartir) {
    cajaCompartir.classList.toggle('transformActive');
  }
}

compartir.addEventListener('click', showShareBox);
copiarLink.addEventListener('click', copiarEnlace);
copiarLink.addEventListener('mouseout', outFunc);
clsBtn.addEventListener('click', function(){
  cajaCompartir.classList.toggle('transformActive');
})
