(function($){
	"use strict";

	$(window).load(function() {
		var $container = $('#fh5co-projects-feed'),
		containerWidth = $container.outerWidth();

		$container.masonry({
			itemSelector : '.fh5co-project',
			columnWidth: function( containerWidth ) {
				if( containerWidth <= 330 ) {
					return 310;
				} else {
					return 330;
				}
			},

			isAnimated: !Modernizr.csstransitions
		});
	});

})(window.jQuery);

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
			 $('#fh5co-header').addClass('hidden-header');
   } else {
			$('#fh5co-header').removeClass('hidden-header');
   }
   lastScrollTop = st;
});

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
