let slideIndex=0;
let slideHeight=0;

$(document).ready(function () {
  menu();
  init();
  slide();
  tab();
  popupClose();
});

function menu(){
    $(".nav>.gnb").hover(
    function(){
      $('.submenu').stop().slideDown(500);
    },
    function(){
      $('.submenu').stop().slideUp(500);
    }
  )
}

function init(){
  slideIndex=1;
  slideHeight=300;
}

function slide(){
  setInterval(slide_move,3000);
}

function slide_move(){
  let newTop=-slideHeight*slideIndex;
  $("#slide_contents").animate({top:newTop},400,"swing");
  if(slideIndex==2){
    slideIndex=0;
  } else{
    slideIndex++;
  }
}


let tabIdx=0

function tab(){
  $("#tab_btn>ul>li").click(function(){
    tabIdx=$(this).index();
    $("#tab_btn>ul>li").removeClass("active");
    $("#tab_cont>div").hide();
    
    $("#tab_btn>ul>li").eq(tabIdx).addClass("active");
    $("#tab_cont>div").eq(tabIdx).show();
  })

}

function popup(){
  $("#popup").show();
}

function popupClose(){
  $("#popup>#closeBtn").click(function(){
    $("#popup").hide();
  })
}

