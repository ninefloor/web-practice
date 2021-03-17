$(document).ready(function () {
  menu();
  slide();
  init();
  tab();
})

let idx = 0;

function menu() {
  $(".gnb>li").hover(function () {
    $(this).children(".lnb").stop().slideToggle(500);
  })
}

function slide() {
  setInterval(slideFunc, 3000);
}

function init() {
  idx = 0;
}

function slideFunc() {
  $(".slide_box>img").eq(idx).fadeOut(500);
  if (idx == 2) {
    idx = 0;
  } else {
    idx++;
  }
  $(".slide_box>img").eq(idx).fadeIn(500);
}

let tabIdx = 0;

function tab() {
  $(".tab_menu>a").click(function () {
    tabIdx = $(this).index();
    $(".tab_menu>a").removeClass("active");
    $(".tab_cont>div").hide();

    $(".tab_menu>a").eq(tabIdx).addClass("active");
    $(".tab_cont>div").eq(tabIdx).show();
  })
}


function popup() {
  $("#popup").show();
}

function popupClose() {
  $("#popup").hide();
}
