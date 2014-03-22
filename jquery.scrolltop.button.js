(function($) {
	  
	  var scrollTopButton = function(element, options) {
	  
	  	function checkScroll() {
			if($(window).scrollTop() > options.scrollHeight) {
				element.fadeIn(200);
			} else if ($(window).scrollTop() <= options.scrollHeight) {
				element.fadeOut(200);
			}
		}
	  
		function startScroll() {
			$('body,html').animate({'scrollTop':0},options.scrollDuration);
		}
		
		function initScrollTopButton() {
		  if (!options.customCss) {
			  element.css({'bottom':'20px', 'right':'20px', 'width':'40px', 'height':'40px', 'border-radius':'50%', 'background-color':'#72B8B8', 'cursor':'pointer'});
			  element.html('<span style="display:block; height:40px; line-height:40px; text-align:center; color:#ffffff"><strong>&and;</strong></span>');
		  }
		  element.css({'display':'none', 'position':'fixed', 'z-index':'9999'}).bind('click', startScroll);
		  checkScroll();		  
		}
		
		$(window).scroll(function() {
			checkScroll();
		});
		
		initScrollTopButton(); 
	  
	  }
	  
	  $.fn.scrollTopButton = function(options) {		  
		var defaults = {
			scrollHeight         : 300,
			scrollDuration       : 500,
			customCss            : 0
		};
 
		var options = $.extend( {}, defaults, options );
		
		return scrollTopButton(this, options);
	  }
	  

})(jQuery);
