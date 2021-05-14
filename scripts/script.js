var $cell = $(".card");

var deviceWidthThreshold = 480;

window.onload = function () {
  $("#menu-btn-id").hide();
};

//open and close card when clicked on card
$cell.find(".js-expander").click(function () {
  var $thisCell = $(this).closest(".card");

  if ($thisCell.hasClass("is-collapsed")) {
    $cell.not($thisCell).removeClass("is-expanded").addClass("is-collapsed");

    $thisCell.removeClass("is-collapsed").addClass("is-expanded");
    if ($(window).width() <= deviceWidthThreshold) {
      // document.getElementsByClassName("grid-container")[0].style
      //   .gridTemplateColumns;

      //   document.getElementsByClassName(
      //     "grid-container"
      //   )[0].style.gridTemplateColumns = "100%";
      $(this).parent().parent().css("grid-template-columns", "100%");
    }
  } else {
    $thisCell.removeClass("is-expanded").addClass("is-collapsed");
    $cell.not($thisCell).removeClass("is-inactive");
    if ($(window).width() <= deviceWidthThreshold) {
      //   document.getElementsByClassName(
      //     "grid-container"
      //   )[0].style.gridTemplateColumns = "50% 50%";
      $(this).parent().parent().css("grid-template-columns", "48% 48%");
      //   console.log($(this).parent().parent().css("grid-template-columns"));
    } else {
      //   document.getElementsByClassName(
      //     "grid-container"
      //   )[0].style.gridTemplateColumns = "auto auto auto";
      $(this).parent().parent().css("grid-template-columns", "auto auto auto");
    }
  }
});

//close card when click on cross
$cell.find(".js-collapser").click(function () {
  var $thisCell = $(this).closest(".card");

  $thisCell.removeClass("is-expanded").addClass("is-collapsed");
  $cell.not($thisCell).removeClass("is-inactive");
  if ($(window).width() <= deviceWidthThreshold) {
    // document.getElementsByClassName(
    //   "grid-container"
    // )[0].style.gridTemplateColumns = "50% 50%";

    $(this).parent().parent().parent().css("grid-template-columns", "48% 48%");
    console.log($(this).parent().parent().parent());
  } else {
    // document.getElementsByClassName(
    //   "grid-container"
    // )[0].style.gridTemplateColumns = "auto auto auto";

    $(this)
      .parent()
      .parent()
      .parent()
      .css("grid-template-columns", "auto auto auto");
  }
});

$(function () {
  $("#wardselector").change(function () {
    $(".ward").hide();
    $("#" + $(this).val()).show();
  });
});

var navpos = $(".menu").offset();
console.log(navpos.top);
$(window).bind("scroll", function () {
  if ($(window).scrollTop() > navpos.top) {
    $("#header").addClass("menu-fixed");
    $("#site-name").hide();
    if ($(window).width() <= deviceWidthThreshold) {
      $(".menu").hide();
      $(".menu-btn").show();
    }
  } else {
    $("#header").removeClass("menu-fixed");
    $("#site-name").show();
    if ($(window).width() <= deviceWidthThreshold) {
      $(".menu").show();
      $(".menu-btn").hide();
    }
  }
});
window.addEventListener("hashchange", function () {
  scrollBy(0, -100);
});

$("#menu-btn-id").click(function () {
  $("#menu-btn-id").toggleClass("menu-btn-open");
  $(".menu").toggle();
  $("ul.menu").css("padding-top", "50px");
  $(".menu").addClass("menu-block li");
});

$(".nav-cls").click(function () {
  if ($(".menu-btn").css("display") == "inline-block") {
    //            console.log("Clicked inside burger menu");
    $(".menu").toggle();
    $("#menu-btn-id").toggleClass("menu-btn-open");
  }
});
