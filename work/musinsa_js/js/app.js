$(document).ready(function () {
  if ($.cookie("autologin")=="true"){
    $("#autologin").prop("checked",true)
  } else if($.cookie("autologin")=="false"){
    $("#autologin").prop("checked",false)
  }
  $("#non_member>.tap_head>a").eq(0).click(function () {
    console.log("eq:0");
    $(this).addClass('active');
    $(".tap_head>a").eq(1).removeClass('active')
    $("#tap_contents1").show();
    $("#tap_contents2").hide();
    $("#wrap").css({"height":"1120px"});
  })
  $("#non_member>.tap_head>a").eq(1).click(function () {
    console.log("eq:1");
    $(this).addClass('active');
    $(".tap_head>a").eq(0).removeClass('active')
    $("#tap_contents2").show();
    $("#tap_contents1").hide();
    $("#wrap").css({"height":"1040px"});
  })
})

let login_value=null;

function funcAuto(){
  if (login_value==null || login_value==0){
    let choice=confirm("개인 PC가 아닐 경우 타인이 로그인 할 수 있습니다. \n PC를 여러 사람이 사용하는 공공장소에서는 체크하지 마세요. \n 정말 앞으로 자동 로그인 하시겠습니까?");
    if (choice==true){
      $("form>.checkbox").addClass("checkbox_on");
      login_value=1;
      $.cookie("autologin","true",{expries:7,path:"/"});
      return;
    } else if (choice==false){
      login_value=0;
      $("#autologin").prop("checked",false);
      return;
    }
  } else if (login_value==1){
    $("form>.checkbox").removeClass("checkbox_on");
    login_value=0;
    $.cookie("autologin","false",{expries:7,path:"/"});
    return;
  }
}

let agree_value=null;
function funcAgree(){
  if (agree_value==null || agree_value==0){
    $("#tap_contents1>.checkbox").addClass("checkbox_on");
    agree_value=1;
    return;
  } else if (agree_value==1){
    $("#tap_contents1>.checkbox").removeClass("checkbox_on");
    agree_value=0;
    return;
  }
}
