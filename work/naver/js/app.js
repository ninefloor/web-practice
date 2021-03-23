$(document).ready(function(){
  if($.cookie("auto")=="true"){
    $("#login_chk").prop("checked",true);
  }
  $("#ip_chk").prop("checked",true);
  ipFunc();
  autoFunc();
})
let ipMode=true;
function ipFunc(){
  $(".ip_chk>label>span").click(function(){
    if(ipMode==true){
      $(".ip_chk>label>span").text("OFF");
      $(".ip_chk>label>span").addClass("ip_off");
      ipMode=false;
    } else{
      $(".ip_chk>label>span").text("ON");
      $(".ip_chk>label>span").removeClass("ip_off");
      ipMode=true;
    }
  })
}
let autoMode=false;
function autoFunc(){
  $("#login_check>label").click(function(){
    if(autoMode==false){
      $("#login_check>label>span").addClass("auto_on");
      $.cookie("auto","true",{expries:7, path:"/"});
      autoMode=true;
    } else{
      $("#login_check>label>span").removeClass("auto_on");
      $.cookie("auto","false",{expries:7, path:"/"});
      autoMode=false;
    }
  })
}

function tooltip(){
  $('.tool_tip').hide();
}