$(function(){
	// 大图轮播
	$('.slide-banner').flexslider({
		namespace: "flex-",             //字符串：附着在类的插件生成的每一个元素的前缀字符串
		animation: "fade",              //字符串：选择你的动画类型,   fade  or  slide
		direction: "horizontal",        //字符串：选择滑动方向,   horizontal  or  vertical
		reverse: false,                 //布尔：反转动画方向
		animationLoop: true,            //布尔:是否循环播放? 如果是 false, 动画将会停在两端
		smoothHeight: false,            //布尔:允许高度的滑块在横屏模式下顺利动画
		startAt: 0,                     //整数：幻灯片开始的位置。数组符号（0=第一张幻灯片）
		slideshow: true,                //布尔:动画是否自动
		slideshowSpeed: 5000,           //整数：设置幻灯片循环的速度，单位为毫秒
		animationSpeed: 400,            //整数：设置动画的速度，单位为毫秒
		initDelay: 0,                   //整数：设置一个初始化的延迟，单位为毫
		pauseOnAction: false,            //布尔：用控制元件互动时暂停幻灯片，强烈推荐
		pauseOnHover: true,            //布尔: 鼠标悬停时是否暂停
		directionNav: true,             //布尔: 是否创建左右切换导航按钮? (true/false)
		controlNav: true              //布尔: 是否创建分页控制

	});
	
	$(".slide-banner").hover(function(){
		 $(this).find(".flex-prev").animate({"left":96},200);
         $(this).find(".flex-next").animate({"right":96},200);
	},function(){
	      $(this).find(".flex-prev").animate({"left":"-48px"},0);
          $(this).find(".flex-next").animate({"right":"-48px"},0);
	});

   //hover
   $(".ul-list li a img").hover(function(){
       $(this).stop().animate({"left":"0px"}, 200); 
     },function(){
   	   $(this).stop().animate({"left":"-10px"}, 200); 
   })

})