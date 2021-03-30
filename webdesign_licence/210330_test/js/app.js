$(document).ready(function () {
  menu();
  slide();
  init();
})

function menu() {
  $('.gnb>li').hover(function () {
    $(this).find('.lnb').stop().slideToggle(500);
  })
}

let idx = 0;
let slideH = 0;

function slide() {
  setInterval(slideFunc, 3000);
}

function init() {
  idx = 1;
  slideH = -300;
}

function slideFunc() {
  $('.slidebox').animate({
    top: idx * slideH
  }, 300, "swing");

  if (idx == 2) {
    idx = 0;
  } else {
    idx++;
  }
}

function popup() {
  $('#pop_bg').fadeToggle(300);
}
