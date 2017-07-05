$(document).ready(function() {
  $("form#name").submit(function(event) {
    var input = $("input#nameIn").val();

    $(".nameIn").text(input);
    $("#letter").show();
    event.preventDefault();
  });
});
