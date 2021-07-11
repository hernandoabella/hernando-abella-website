$(function () {
    // hide all content
    $(".accordeon_content").hide();
  
    $(".accordeon_title").click(function () {
      $(this).parent().toggleClass("active").siblings().removeClass("active");
      $(".accordeon_content").slideUp();
  
      if (!$(this).next().is(":visible")) {
        $(this).next().slideDown();
      }
    });
  });
  
 