$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });
  $(".menu-item").click(function () {
    $("#menu").toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });
});
