$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var anythingInput = $("input#anything").val().toUpperCase();
    $(".anything").text(anythingInput);
    $("#result").show();
    event.preventDefault();
  });
});
