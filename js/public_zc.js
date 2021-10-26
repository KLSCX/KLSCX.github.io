$(function() {

	$(".nav ul li a:last").css("border","none");
	$('nav#mmenu').mmenu({
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		counters	: false,
		navbar 		: {
			title		: '菜单',
		},
		navbars		: [
			 {
				position	: 'top',
				content		: [
					'prev',
					'title',
					'close'
				]
			}, {
				position	: 'bottom',
				content		: [
					''
				]
			} 
		]
	});
	/*index*/
	
    $('.banner').slick({
		dots: true,
        autoplay:true,
        arrows:false, 
        autoplaySpeed:3000,
    });
		
	 $('.syzz_con .left').slick({
		dots: true,
        autoplay:true,
        arrows:true, 
        autoplaySpeed:3000,
    });


		$(".links").hover(function(){
			$(".links ul").slideDown(500)
			
		},
		function(){
				$(".links ul").slideUp(500)
		})
		
		
		$(".er_a").hover(function(){
			$(".er_img").show();		
		},
		function(){
			$(".er_img").hide();
		
		})
		
				
		$(".f_da").slick({
			fade: true,
			useTransform: true,
			arrows: false,
			asNavFor:".f_xiao"
		})	
		$('.f_xiao').slick({
		  slidesToShow: 3,	
		  slidesToScroll: 1,
		  arrows:true,	  
		  focusOnSelect: true,
		 useTransform: true,
		 asNavFor:".f_da"
	
		});
		
		var left_img = $(".left img").attr("src");
		$(".pic_li").hover(function(){
			var img_src = $(this).find("img").attr("src");
			$(".left img").attr("src",img_src);
		},function(){
		
		})
		$(".nav li").hover(function(){
			$(this).find("ul").fadeIn()
		},function(){
			$(this).find("ul").fadeOut()
		})
		
});

  