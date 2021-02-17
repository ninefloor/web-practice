$(document).ready(function(){
  $("#header>.nav>ul>li").hover(
    function() {
      $(".submenu, .nav_back").stop().slideToggle(500);
    }
  )
})