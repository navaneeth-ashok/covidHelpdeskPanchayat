var $cell = $(".card");

var gridStatusStock;
var deviceWidthThreshold = 480;

//open and close card when clicked on card
$cell.find(".js-expander").click(function () {
  var $thisCell = $(this).closest(".card");

  if ($thisCell.hasClass("is-collapsed")) {
    $cell.not($thisCell).removeClass("is-expanded").addClass("is-collapsed");

    $thisCell.removeClass("is-collapsed").addClass("is-expanded");
    if ($(window).width() <= deviceWidthThreshold) {
      console.log($(this).parent().parent());
      gridStatusStock = $(this).parent().parent().css("grid-template-columns");
      // document.getElementsByClassName("grid-container")[0].style
      //   .gridTemplateColumns;

      //   document.getElementsByClassName(
      //     "grid-container"
      //   )[0].style.gridTemplateColumns = "100%";
      $(this).parent().parent().css("grid-template-columns", "100%");
    }

    if ($cell.not($thisCell).hasClass("is-inactive")) {
      //do nothing
    } else {
      //   $cell.not($thisCell).addClass("is-inactive");
    }
  } else {
    $thisCell.removeClass("is-expanded").addClass("is-collapsed");
    $cell.not($thisCell).removeClass("is-inactive");
    if ($(window).width() <= deviceWidthThreshold) {
      //   document.getElementsByClassName(
      //     "grid-container"
      //   )[0].style.gridTemplateColumns = "50% 50%";
      $(this).parent().parent().css("grid-template-columns", "50% 50%");
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
    $(this).parent().parent().css("grid-template-columns", "50% 50%");
  } else {
    // document.getElementsByClassName(
    //   "grid-container"
    // )[0].style.gridTemplateColumns = "auto auto auto";
    $(this).parent().parent().css("grid-template-columns", "auto auto auto");
  }
});
