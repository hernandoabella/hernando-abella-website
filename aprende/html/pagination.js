

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  // Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
let sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("activeItem");
    } else {
      link.classList.remove("activeItem");
    }
  });
});

// $(document).ready(() => {
//   $('aside ul li a').click(function(){
//     $(this).removeClass('activeItem')
//     .parent()
//     .siblings()
//     .find('.activeItem')
//     .addClass('activeItem');
//   })
// })

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {
  myFunction();
};



