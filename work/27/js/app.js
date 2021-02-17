$(document).ready(function(){
  $("#side>.nav>ul>li").hover(
    function() {
      $(this).children(".submenu").stop().slideToggle(500);
    }
  )
})