$(document).ready(function(){
  $(".layerPopup").click(function(){
    $(".layer").show();
  })
  $(".close").click(function(){
    $(this).parent().hide();
  })
})
