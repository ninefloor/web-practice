$(document).ready(function () {
  menu();
  slide();
  init();
})

let slideIdx = 0;

function menu() {
  $('.gnb>li').hover(function () {
    $(this).find('.lnb').stop().slideToggle(500);
  })
};

function slide() {
  setInterval(slideFunc, 3000);
};

function init() {
  slideIdx = 0;
};

function slideFunc() {
  $('.slidebox>li').eq(slideIdx).fadeOut(750);

  if (slideIdx == 2) {
    slideIdx = 0;
  } else {
    slideIdx++;
  }

  $('.slidebox>li').eq(slideIdx).fadeIn(750);
};

function popup() {
  $("#popup").fadeToggle(300);
};
