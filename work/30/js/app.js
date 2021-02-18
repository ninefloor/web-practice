$(document).ready(function(){
  setInterval(slide,3000);
})

let slide_num=0;
function slide(){
  $(".slideList").animate({left:slide_num*-1200});
  if(slide_num==2){
    slide_num=0;
  } else{
    slide_num+=1;
  }
}