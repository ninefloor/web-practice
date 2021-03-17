$(document).ready(function () {
  menu();
  init();
  slide();
})

let idx = 0;
let slideWidth = 0;

function menu() {
  $(".gnb>li").hover(function () {
    $(".lnb,.wing").stop().slideToggle(300);
  })
}


function slide() {
  setInterval(slideFunc, 3000);
}

function init() {
  idx = 1;
  slideWidth = -1200;
}

function slideFunc() {
  $(".slide_box").animate({
    left: slideWidth * idx
  }, 400, "swing");
  if (idx == 2) {
    idx = 0;
  } else {
    idx++;
  }
}


function popup() {
  $("#popup").fadeIn(300);
}

function popupClose() {
  $("#popup").fadeOut(300);
}
