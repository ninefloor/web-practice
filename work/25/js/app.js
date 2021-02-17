$(document).ready(function(){
  $("#header>.nav>ul>li").hover(
    function() {
      $(this).children(".submenu").stop().slideToggle(500);
    },
    function() {
      $(this).children(".submenu").stop().slideToggle(500);
    }
  )
})