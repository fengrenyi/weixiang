$(function(){
	//fixed
	$(window).scroll(function() {
		var scrolltop = $(this).scrollTop();
		if (scrolltop > 72) {
			$(".head .nav").addClass("fixed");
		} else if (scrolltop <= 72) {
			$(".head .nav").removeClass("fixed");
		}
	   if (scrolltop > 485) {
			$(".content .f-nav").addClass("fixed2");
		 } else if (scrolltop <= 485) {
			$(".content .f-nav").removeClass("fixed2");
		}	
	 });

   function rurnTop(){
		var btHtml = '<div class="qq_s">';
		   btHtml +='<div class="q_top" onclick="HideFoot()"> <span class="signi"></span>收起</div>';
		   btHtml +='<div class="q_botm">';
		    btHtml +='<div class="q_pic">';
		       btHtml +='<div class="q_pic_hide"> <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAyMTkxNl8yODUwNzZfNDAwNjY2MDM2MF8yXw" target="_blank" title="企业qq交谈" rel="nofollow">';
		       btHtml +='<span class="hide_pic"></span>企业qq交谈 </a> </div>';
		       btHtml +='</div>';
		       btHtml +='<div class="q_anser">';
		       btHtml +=' <div class="q_anser_hide"> <a href="javascript:void(0)" title="400-666-0360">';
		       btHtml +='<span class="hide_pic1"></span>400-666-0360</a> </div>';
		       btHtml +='</div>';
		       btHtml +='<div class="q_sign">';
		       btHtml +='<div class="q_sign_hide" onclick="backToTop();"><a href="javascript:void(0)" title="返回顶部">';
		       btHtml +='<span class="hide_pic2"></span>返回顶部 </a></div>';
		     btHtml +='</div>';
		   btHtml +='</div>';
		   btHtml +='</div>';
		   btHtml +='<div class="qq_s1">';
		   btHtml +='<div class="q_top1" onclick="showFoot()"> <span class="signj"></span>展开</div>';
		   btHtml +='<div class="q_botm1">';
		    btHtml +='<div class="q_pic1">';
		      btHtml +='<div class="q_pic1_hide"> <a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAyMTkxNl8yODUwNzZfNDAwNjY2MDM2MF8yXw" rel="nofollow">';
		      btHtml +='<span class="hide_pic3"></span>qq交谈</a></div>';
		      btHtml +='</div>';
		      btHtml +='<div class="q_sign1">';
		      btHtml +='<div class="q_sign1_hide" onclick="backToTop();"><a href="javascript:void(0)">返回顶部</a></div>';
		    btHtml +='</div>';
		  btHtml +='</div>';
		btHtml +='</div>';
	   $("body").append(btHtml);   	
   }
  rurnTop();
})

function HideFoot(){
	var winHeight = $(window).height();
	var objHeight = $(".qq_s").height();
	var objTop = winHeight - objHeight - 15;
	$(".qq_s").animate({top:objTop},100,function(){
		$('.qq_s').css("display","none");
		$('.qq_s1').css("display","block");		
		console.log("全容电子商务");
	});
}
function showFoot(){
	$(".qq_s").css("display", "block");
	$(".qq_s1").css("display", "none");
	$(".qq_s").animate({top:"40%"},100,function(){
		console.log("全容电子商务");
	});
}
//返回顶部
function backToTop(){
	$("html,body").animate({ scrollTop: 0 },500,function(){
	});
}

