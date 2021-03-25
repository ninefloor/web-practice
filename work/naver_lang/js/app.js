$(document).ready(function(){
  if($.cookie("auto")=="true"){
    $("#login_chk").prop("checked",true);
    $("#login_check>label>span:first-child").addClass("auto_on");
  }
  $("#ip_chk").prop("checked",true);
  ipFunc();
  autoFunc();
  lang();
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
      $("#login_check>label>span:first-child").addClass("auto_on");
      $.cookie("auto","true",{expries:7, path:"/"});
      autoMode=true;
    } else{
      $("#login_check>label>span:first-child").removeClass("auto_on");
      $.cookie("auto","false",{expries:7, path:"/"});
      autoMode=false;
    }
  })
}

function tooltip(){
  $('.tool_tip').hide();
}

let lang_val='';
let id=$('#id');
let pw=$('#pw');
let loginButton=$('#submit_login');
let autoLabel=$('#login_check>label');

function lang(){
  $('#lang').on('change',function(){
    lang_val=$("select[name='lang']").val();
    console.log(lang_val);

    if(lang_val=='ko_KR'){
      $('html').attr('lang','ko');
      $('#id').attr('placeholder','아이디');
      $('#pw').attr('placeholder','비밀번호');
      $('#submit_login').attr('value','로그인');
      $('#login_check>label>span:nth-child(2)').text('로그인 상태 유지');
      $('#ip_check').show();
      $('.title').text('더욱 간편한 로그인');
      $('#qr_area_ko').show();
      $('#menu_ko').show();
      $('#ad').show();

      $('#qr_area_foreign').hide();
      $('#menu_us').hide();
      $('#menu_cn').hide();
      $('#menu_tw').hide();
    } else if(lang_val=='en_US'){
      $('html').attr('lang','en');
      $('#id').attr('placeholder','Username');
      $('#pw').attr('placeholder','Password');
      $('#submit_login').attr('value','Sign in');
      $('#login_check>label>span:nth-child(2)').text('Stay Signed in');
      $('#ip_check').hide();
      $('.title').text('Easier sign in');
      $('#qr_area_foreign').show();
      $('#menu_us').show();
      
      $('#qr_area_ko').hide();
      $('#menu_ko').hide();
      $('#menu_cn').hide();
      $('#menu_tw').hide();
      $('#ad').hide();
    } else if(lang_val=='zh_Hans_CN'){
      $('html').attr('lang','zh-Hans');
      $('#id').attr('placeholder','帐号');
      $('#pw').attr('placeholder','密码');
      $('#submit_login').attr('value','登录');
      $('#login_check>label>span:nth-child(2)').text('维持登录状态');
      $('#ip_check').hide();
      $('.title').text('Easier sign in');
      $('#qr_area_foreign').show();
      $('#menu_cn').show();
      
      $('#qr_area_ko').hide();
      $('#menu_ko').hide();
      $('#menu_us').hide();
      $('#menu_tw').hide();
      $('#ad').hide();
    } else if(lang_val=='zh_Hans_TW'){
      $('html').attr('lang','zh-Hant');
      $('#id').attr('placeholder','帳號');
      $('#pw').attr('placeholder','密碼');
      $('#submit_login').attr('value','登入');
      $('#login_check>label>span:nth-child(2)').text('維持登入狀態');
      $('#ip_check').hide();
      $('.title').text('Easier sign in');
      $('#qr_area_foreign').show();
      $('#menu_tw').show();
      
      $('#qr_area_ko').hide();
      $('#menu_ko').hide();
      $('#menu_cn').hide();
      $('#menu_us').hide();
      $('#ad').hide();
    }
  })
  
}