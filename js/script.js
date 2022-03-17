var aLinks = document.querySelectorAll(".navegacion a");aLinks[0];

function miFuncion(x) {
    if (x.matches) { // If media query matches
        document.body.style.backgroundColor = "orange";
        
    } 
}

var x = window.matchMedia("(max-width: 768px)")
miFuncion(x) // Call listener function at run time
x.addListener(miFuncion) // Attach listener function on state changes