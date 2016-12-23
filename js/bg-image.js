(function ($) {
	$(".bg-image").each(function() {
		// VARS
		var url = $(this).data("bgImage");
		var height = $(this).data("bgHeight");
		// ADD CSS
		$(this).css({
			"background-image": "url('" + url + "')", "height": height
		});
	});
}( jQuery ));
