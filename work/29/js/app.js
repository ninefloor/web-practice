$(document).ready(function(){
  setInterval(slide,3000);
})

let slide_num=1;
function slide(){
  $(".slideList").animate({top:slide_num*-360});
  if(slide_num==2){
    slide_num=0;
  } else{
    slide_num+=1;
  }
}
