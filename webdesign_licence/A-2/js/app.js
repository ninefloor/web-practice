let slideIdx=0;
let slideMove=0;

$(document).ready(function(){
  menu();
  slide();
  init();
  popClose();
})

function menu(){
  $(".gnb").hover(
    function(){
      $(".lnb").stop().slideDown(400);
      $(".wing").stop().slideDown(400);
    },
    function(){
      $(".lnb").stop().slideUp(400);
      $(".wing").stop().slideUp(400);
    }
  );
}

function slide(){
  setInterval(slideFunc,3000);
}

function init(){
  slideIdx=1;
  slideMove=1200;
}

function slideFunc(){
  let move=-slideMove*slideIdx;
  $("#slide_list").animate({left:move},400,"swing");
  if(slideIdx==2){
    slideIdx=0;
  } else{
    slideIdx++;
  }
}

function popup(){
  $("#popup").show();
}

function popClose(){
  $("#popup>.closeBtn").click(function(){
    $("#popup").hide();
  })
}