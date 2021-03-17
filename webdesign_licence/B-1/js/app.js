let idx=0;
let slideIdx=0;
$(document).ready(function () {
  menu();
  tab();
  init();
  slide();
  popup();
});


function menu(){
  $(".gnb>li").hover(
    function(){
      $(".lnb").stop().slideDown(400);
    },
    function(){
      $(".lnb").stop().slideUp(400);
    }
  )
}


function tab(){
  $(".tab_menu>ul>li>a").click(function(){
    idx=$(this).parent(".tab_menu>ul>li").index();
    $(".tab_menu>ul>li>a").removeClass("active");
    $(".tab_contents>div").hide();

    $(".tab_menu>ul>li").children("a").eq(idx).addClass("active");
    $(".tab_contents>div").eq(idx).show();
  })
}

function init(){
  slideIdx=1;
}

function slide(){
  setInterval(slideFunc,3000);
}

function slideFunc(){
  let leftMove=-1200*slideIdx;
  $(".slide_cont").animate({left:leftMove},400,"swing");
  if(slideIdx == 2){
    slideIdx=0;
  } else {
    slideIdx++;
  }
}

function popup(){
  $(".tab_cont1>ul>li:first-child>a").click(function(){
    $("#popup").show();
  })

  $(".closeBtn").click(function(){
    $("#popup").hide();
  })
}