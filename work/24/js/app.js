$(document).ready(function(){
  $("#header>.nav>ul>li").hover(
    function() {
      $(".submenu").stop().slideToggle(500);
    },
    function() {
      $(".submenu").stop().slideToggle(500);
    }
  )
})