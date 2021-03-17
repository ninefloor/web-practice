$(document).ready(function () {
  menu();
  init();
  slide();
})

let slideIdx = 0;
let slideHeight = 0;

function menu() {
  $(".gnb>li").hover(
    function () {
      $(this).find(".lnb").stop().slideToggle(500);
    }
  )
}

function slide() {
  setInterval(slideFunc, 3000);
}

function init() {
  slideIdx = 1;
  slideHeight = 300;
}

function slideFunc() {
  $("#slide_box").animate({
    top: -slideHeight * slideIdx
  }, 400, "swing");
  if (slideIdx == 2) {
    slideIdx = 0;
  } else {
    slideIdx++;
  }
}

function popup() {
  $("#popup").show();
}

function popupClose() {
  $("#popup").hide();
}
