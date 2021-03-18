$(document).ready(function () {
  menu();
  slide();
  init();
  tab();
})

function menu() {
  $('.gnb>li').hover(function () {
    $(this).find('.lnb').stop().slideToggle(300);
  })
}

let idx = 0;
let tabIdx = 0;

function slide() {
  setInterval(slideFunc, 3000);
}

function init() {
  idx = 0;
}

function slideFunc() {
  $('.slide_box>a').eq(idx).fadeOut(500);

  if (idx == 2) {
    idx = 0;
  } else {
    idx++;
  }

  $('.slide_box>a').eq(idx).fadeIn(500);
}

function tab() {
  $('.tab_menu>a').click(function () {
    tabIdx = $(this).index();
    console.log(tabIdx);
    $('.tab_menu>a').removeClass('active');
    $('.tab_cont>div').hide();

    $('.tab_menu>a').eq(tabIdx).addClass('active');
    $('.tab_cont>div').eq(tabIdx).show();
  })
}

function popup() {
  $('#pop_bg').toggle();
}
