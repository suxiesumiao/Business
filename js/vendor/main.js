/图片轮转函数/ 
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:1000,
        mouseDrag:true,
        // autoplayHoverPause:true	//鼠标滑过暂停
    });
});
/主导航固定函数/
$(function(){
	$(window).on('scroll',function(){
		if($(window).scrollTop() > 10){
			$("header .top").css({
				"margin-bottom":"0"
			})
			$("header .main").css({
				"position":"fixed",
				"margin-top":"-38px",
				"background-color":"#999",
				"box-shadow":"0 0 20px"
			});
		}else{
			$("header .main").css({
				"position":"block",
				"margin-top":"0",
				"background-color":"#eee",
				"box-shadow":"0 0 0"
			});
		}
    });
    $(window).trigger("scroll");//自动触发scroll事件
})