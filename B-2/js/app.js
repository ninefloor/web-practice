let slideIdx=0;
let slideHeight=0;

$(document).ready(function(){
  menu();
  init();
  slide();
  
});

function menu(){
  $(".gnb>li").hover(
    function(){
      $(".lnb,.wing").stop().slideDown(400);
    },
    function(){
      $(".lnb,.wing").stop().slideUp(400);
    }
  )
}

function init(){
  slideIdx=1;
  slideHeight=300;
}

function slide(){
  setInterval(slideFunc,3000);
}

function slideFunc(){
  $(".slide_box").animate({top:-slideHeight*slideIdx});
  if(slideIdx == 2){
    slideIdx=0;
  } else {
    slideIdx++;
  }
}

function popup(){
  $("#popup").show();
}

function popupClose(){
  $("#popup").hide();
}