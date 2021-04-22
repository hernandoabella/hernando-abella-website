$(document).ready(function() {
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    showPage(1, value);
  });

  pageSize = 10;

  showPage = function(page, searchTerm) {
    let $filteredCards = $("li a");
    if (searchTerm) {
      $filteredCards = $filteredCards.filter(function() {
        return $(this).text().toLowerCase().indexOf(searchTerm) > -1;
      });
    }
    $("li a").parent().hide(); // in here add .parent()
    $filteredCards.each(function(n) {
      if (n >= pageSize * (page - 1) && n < pageSize * page)
        $(this).parent().show(); // also in here
    });
  }

  showPage(1);

  $("#paginator a").click(function() {
    $("#paginator a").removeClass("pagActive");
    $(this).addClass("pagActive");
    showPage(parseInt($(this).data('page')), $("#myInput").val().toLowerCase());
  });

});