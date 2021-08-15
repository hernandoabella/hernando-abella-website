/* 
	Bonativo by TEMPLATE STOCK
	templatestock.co @templatestock
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/


 $(window).scroll(function(){      
        /* -------------------
        Header Animation
        ---------------------*/
        if ($(this).scrollTop() > 50){  
            $('.before-color').addClass("after-color");
        }
        else{
            $('.before-color').removeClass("after-color");
        }
    });

//full width revolution
var revapi;


jQuery(document).ready(function() {

    revapi = jQuery('.tp-banner').revolution(
            {
                delay: 6000,
                startwidth: 1170,
                startheight: 450,
                hideThumbs: 10,
                fullScreen: "on",
                forceFullWidth: "on",
                navigationStyle: "preview4"
            });

});	//ready

  $(window).load(function() {
    $('.testislider').flexslider({
        direction: "horizantol",
        animation: "slide",
        smoothHeight: true,
        controlNav: false
    });
  });

/**smooth scroll on anchor tag****/
$(function() {
    $('.scroll-to a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


/* -------------------
 Parallax Sections
 ---------------------*/
if (!Modernizr.touch) {
    $('.parallax-1').parallax("50%", 0.5);
    $('.parallax-2').parallax("50%", 0.5);
    $('.parallax-3').parallax("50%", 0.5);
}
/*----------------
 Auto Close Navbar
 -----------------*/
function close_toggle() {
    if ($(window).width() <= 992) {
        $('.navbar-collapse a').on('click', function() {
            $('.navbar-collapse').collapse('hide');
        });
    }
    else {
        $('.navbar .navbar-default a').off('click');
    }
}
close_toggle();
$(window).resize(close_toggle);
$(".navbar-collapse").css({maxHeight: $(window).height() - $(".navbar-header").height() + "px"});
$(function() {
    $('.navbar-toggle').bind('click', function(event) {
        var $anchor = $('.navbar-header');
        $('html, body').stop().animate({
            scrollTop: $($anchor).offset().top - 0
        }, 800, 'swing');
        event.preventDefault();
    });
});



/**prettyPhoto**/
$(window).load(function(){
 "use strict";
    $("a[data-gal^='prettyPhoto']").prettyPhoto();
  });