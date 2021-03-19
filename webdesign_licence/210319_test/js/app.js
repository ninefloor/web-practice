$(document).ready(function () {
  menu();
  init();
  slide();
})

function menu() {
  $('.gnb>li').hover(function () {
    $(this).find('.lnb').stop().fadeToggle(400);
  })
}

let idx = 0;
let slideW = 0;

function slide() {
  setInterval(slideFunc, 3000);
}

function init() {
  idx = 1;
  slideW = 800;
}

function slideFunc() {
  $('.slide_box').animate({
    left: -slideW * idx
  }, 500, "swing");

  if (idx == 2) {
    idx = 0;
  } else {
    idx++;
  }
}

function popup() {
  $('#popup').fadeToggle(400);
}
