$(document).ready(function () {
	menu();
	slide();
	popup();
});

function menu() {
	$(".gnb>li").hover(
		function () {
			$(".wing,.lnb").stop().slideDown(300);
		},
		function () {
			$(".wing,.lnb").stop().slideUp(300);
		}
	)
}

function popup() {
	$(".notice_list>li:first-child").click(function(){
		$("#popup").show();
	});
	$("#popup>button").click(function(){
		$("#popup").hide();
	})
}


function slide() {
	setInterval(slideFunc, 3000);
}

let idx = 0;

function slideFunc() {
	$("#slide_contain>img").eq(idx).fadeOut(300);

	if (idx == 2) {
		idx = 0;
	} else {
		idx++;
	}

	$("#slide_contain>img").eq(idx).fadeIn(300);
}

// delay 3s