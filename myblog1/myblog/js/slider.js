//点击原点显示下一张图
$(function(){
	$('body').on('click','.slider-poin',function(){
		var index = $(this).index();
		$('.content-box img').eq(index).fadeIn(800)
		.siblings().fadeOut(800);
		$(this).addClass('current')
		.siblings().removeClass('current');
	});
	
	//轮播图自动播放
	var timer = null;
	function loop(){
		clearTimeout(timer);
		timer = setTimeout(function() {
			if($('.slider-poin').index($('.slider-poin.current'))+1==$('.slider-poin').length) {
				$('.slider-poin').eq(0).click();
			} else {
				$('.slider-poin.current').next().click();
			}
			loop();
		}, 2000);
	}
	loop();
	$('.content').mouseover(function() { 
		clearTimeout(timer)
	}).mouseout(function(){ 
		loop(); 
	});

	//点击上一步  显示上一张图
	$('body').on('click','.prebtn',function(){
		if($('.slider-poin').index($('.slider-poin.current'))==0){
			$('.slider-poin').eq(2).click();
		}else{
			$('.slider-poin.current').prev().click();
		}
	});

	//点击下一步  显示下一张图
	$('body').on('click','.nextbtn',function() {
		if($('.slider-poin').index($('.slider-poin.current'))==2){
			$('.slider-poin').eq(0).click();
		} else {
			$('.slider-poin.current').next().click();
		}
	});
});