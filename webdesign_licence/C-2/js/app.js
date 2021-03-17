$(document).ready(function () {
  menu();
  init();
  slide();
})

let idx = 0;

function menu() {
  $(".gnb>li").hover(function () {
    $(this).find(".lnb").stop().slideToggle(400);
  })
}

function slide() {
  setInterval(slideFunc, 3000);
}

function init() {
  idx = 0;
}

function slideFunc() {
  $(".slide_box>a").eq(idx).fadeOut(500);

  if (idx == 2) {
    idx = 0;
  } else {
    idx++;
  }

  $(".slide_box>a").eq(idx).fadeIn(500);
}

function popup() {
  $("#popup").fadeToggle(100);
}
