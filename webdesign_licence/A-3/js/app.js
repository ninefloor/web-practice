let slideIdx=0;
let tabIdx=0;

$(document).ready(function(){
  $("#slide_cont>img").eq(0).fadeIn(300);
  menu();
  slide();
  tab();
  init();
  popClose();
})

function menu(){
  $(".gnb>li").hover(
    function(){
      $(this).children(".lnb").stop().slideDown(500);
    },
    function(){
      $(this).children(".lnb").stop().slideUp(500);
    }
  )
}

function slide(){
  setInterval(slideFade,3000);
}

function init(){
  slideIdx=0;
}

function slideFade(){
  $("#slide_cont>img").eq(slideIdx).fadeOut(300);
  if(slideIdx==2){
    slideIdx=0;
  } else{
    slideIdx++;
  }
  $("#slide_cont>img").eq(slideIdx).fadeIn(300);
}

function tab(){
  $(".tab_menu>a").click(function(){
    tabIdx=$(this).index();
    $(".tab_menu>a").removeClass("active");
    $(".tab_cont>div").hide();
    
    $(".tab_menu>a").eq(tabIdx).addClass("active");
    $(".tab_cont>div").eq(tabIdx).show();
  })
}

function popup(){
  $(".popup").show();
}

function popClose(){
  $(".popup>.closeBtn").click(function(){
    $(".popup").hide();
  });
}