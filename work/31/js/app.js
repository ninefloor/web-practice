$(document).ready(function(){
  setInterval(slide,3000);
  $(".slideImg").eq(0).fadeIn(300);
})

let slide_num=0;
function slide(){
  $(".slideImg").eq(slide_num).fadeOut(300);
  if(slide_num==2){
    slide_num=0;
  } else{
    slide_num+=1
  }
  $(".slideImg").eq(slide_num).fadeIn(300);
}