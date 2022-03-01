// botones para compartir proyectos
const compartir = document.querySelector('.compartir');
const copiarLink = document.querySelector('.copy-link');
const cajaCompartir = document.querySelector('.share-box');
const clsBtn = document.querySelector('.closebtn');
const currentSite = window.location.href;
const urlName = document.querySelector('.project__title').innerText;
const cadenaRecortada = urlName.substr(3).toLowerCase()

const twitterURL = `http://twitter.com/share?text=${urlName}&url=${currentSite}&hashtags=${cadenaRecortada},javascript`;
const twitterShareBtn = document.querySelector('.twitter-share-button');
twitterShareBtn.href = twitterURL;
twitterShareBtn.target = "_blank";

const facebookShareBtn = document.querySelector('.facebook-share-button');
facebookShareBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${currentSite}`;
facebookShareBtn.target = "_blank";

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
