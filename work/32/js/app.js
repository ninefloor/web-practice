$(document).ready(function(){
  $(".tab_cont2").hide();
  $(".tab-btn>ul>li").eq(0).click(function(){
    $(this).css({"text-decoration": "underline"});
    $(".tab-btn>ul>li").eq(1).css({"text-decoration": "none"});
    $(".tab_cont1").show();
    $(".tab_cont2").hide();
  })
  $(".tab-btn>ul>li").eq(1).click(function(){
    $(this).css({"text-decoration": "underline"});
    $(".tab-btn>ul>li").eq(0).css({"text-decoration": "none"});
    $(".tab_cont2").show();
    $(".tab_cont1").hide();
  })
});