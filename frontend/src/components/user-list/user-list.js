import $ from "jquery";

$(document).on("click", ".view", function () {
  $(".change_view button").removeClass("active");
  $(this).addClass("active");
});

$(document).on("click", ".word-filter", function () {
  $(".filter-by-word li").removeClass("active");
  $(this).addClass("active");
});
