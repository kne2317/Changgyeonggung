
   		$(document).ready(function(){
     		$('.slider').bxSlider({
     			auto: true, 
     			speed: 700, 
     			pause: 5000, 
     			mode:'fade', 
     			autoControls: true, 
     			pager: true,
     		});
			$('.drawer1>a').mouseover(function(){
				$('.drawer-menu1').slideDown('fast')
				$('.drawer-menu2').slideUp('fast')
				$('.drawer-menu3').slideUp('fast')
				$('.drawer-menu4').slideUp('fast')
				$('.drawer-menu5').slideUp('fast')
				$('.drawer-menu6').slideUp('fast')
			});
			$('.drawer-menu1').mouseleave(function(){
				$('.drawer-menu1').slideUp('fast')
				$('.drawer-menu2').slideUp('fast')
				$('.drawer-menu3').slideUp('fast')
				$('.drawer-menu4').slideUp('fast')
				$('.drawer-menu5').slideUp('fast')
				$('.drawer-menu6').slideUp('fast')
			});
			$('.drawer2>a').mouseover(function(){
				$('.drawer-menu2').slideDown('fast')
				$('.drawer-menu1').slideUp('fast')
				$('.drawer-menu3').slideUp('fast')
				$('.drawer-menu4').slideUp('fast')
				$('.drawer-menu5').slideUp('fast')
				$('.drawer-menu6').slideUp('fast')
			});
			$('.drawer-menu2').mouseleave(function(){
				$('.drawer-menu1').slideUp('fast')
				$('.drawer-menu2').slideUp('fast')
				$('.drawer-menu3').slideUp('fast')
				$('.drawer-menu4').slideUp('fast')
				$('.drawer-menu5').slideUp('fast')
				$('.drawer-menu6').slideUp('fast')
			});
			$('.drawer3>a').mouseover(function(){
				$('.drawer-menu3').slideDown('fast')
				$('.drawer-menu1').slideUp('fast')
				$('.drawer-menu2').slideUp('fast')
				$('.drawer-menu4').slideUp('fast')
				$('.drawer-menu5').slideUp('fast')
				$('.drawer-menu6').slideUp('fast')
			});
			$('.drawer-menu3').mouseleave(function(){
				$('.drawer-menu1').slideUp('fast')
				$('.drawer-menu2').slideUp('fast')
				$('.drawer-menu3').slideUp('fast')
				$('.drawer-menu4').slideUp('fast')
				$('.drawer-menu5').slideUp('fast')
				$('.drawer-menu6').slideUp('fast')
			});
			$('.drawer4>a').mouseover(function(){
				$('.drawer-menu4').slideDown('fast')
				$('.drawer-menu1').slideUp('fast')
				$('.drawer-menu2').slideUp('fast')
				$('.drawer-menu3').slideUp('fast')
				$('.drawer-menu5').slideUp('fast')
				$('.drawer-menu6').slideUp('fast')
			});
			$('.drawer-menu4').mouseleave(function(){
				$('.drawer-menu1').slideUp('fast')
				$('.drawer-menu2').slideUp('fast')
				$('.drawer-menu3').slideUp('fast')
				$('.drawer-menu4').slideUp('fast')
				$('.drawer-menu5').slideUp('fast')
				$('.drawer-menu6').slideUp('fast')
			});
			$('.drawer5>a').mouseover(function(){
				$('.drawer-menu5').slideDown('fast')
				$('.drawer-menu1').slideUp('fast')
				$('.drawer-menu2').slideUp('fast')
				$('.drawer-menu3').slideUp('fast')
				$('.drawer-menu4').slideUp('fast')
				$('.drawer-menu6').slideUp('fast')
			});
			$('.drawer-menu5').mouseleave(function(){
				$('.drawer-menu1').slideUp('fast')
				$('.drawer-menu2').slideUp('fast')
				$('.drawer-menu3').slideUp('fast')
				$('.drawer-menu4').slideUp('fast')
				$('.drawer-menu5').slideUp('fast')
				$('.drawer-menu6').slideUp('fast')
			});
			$('.drawer6>a').mouseover(function(){
					$('.drawer-menu6').slideDown('fast')
					$('.drawer-menu1').slideUp('fast')
					$('.drawer-menu2').slideUp('fast')
					$('.drawer-menu3').slideUp('fast')
					$('.drawer-menu4').slideUp('fast')
					$('.drawer-menu5').slideUp('fast')
			});
			$('.drawer-menu6').mouseleave(function(){
				$('.drawer-menu1').slideUp('fast')
				$('.drawer-menu2').slideUp('fast')
				$('.drawer-menu3').slideUp('fast')
				$('.drawer-menu4').slideUp('fast')
				$('.drawer-menu5').slideUp('fast')
				$('.drawer-menu6').slideUp('fast')
			});
    	});