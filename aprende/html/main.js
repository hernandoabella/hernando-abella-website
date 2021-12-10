function openNav() {
    document.getElementById("course__sidebar").style.transform = "translate(0px)";
}
  
function closeNav() {
    document.getElementById("course__sidebar").style.transform = "translate(-300px)";
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}