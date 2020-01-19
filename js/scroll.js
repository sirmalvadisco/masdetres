$(document).ready(function() {
$('#aviso').hide(0);


		$(window).scroll(function(){


				var windowHeight = $(window).scrollTop();
				var punto = $("#punto").offset();

				punto = punto.top;


				if(windowHeight >= punto  ){
					

					$('#aviso').fadeIn(500);

				}else{
					$('#aviso').fadeOut(500);

				}


		});

});