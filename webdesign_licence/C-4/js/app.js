$(document).ready(function () {
  menu();
  slide();
  init();
})

function menu() {
  $(".gnb>li").hover(function () {
    $(this).find(".lnb").stop().slideToggle(400);
  })
}

let idx = 0;
let slideL = 0;
let move = 0;

function slide() {
  setInterval(slideFunc, 3000);
}

function init() {
  idx = 1;
  slideL = 800;
}

function slideFunc() {
  move = -slideL * idx;
  $(".slide_box").animate({
    left: move
  }, 600, "swing");
  if (idx == 2) {
    idx = 0;
  } else {
    idx++;
  }
}

function popup() {
  $("#pop_back").toggle();
}
