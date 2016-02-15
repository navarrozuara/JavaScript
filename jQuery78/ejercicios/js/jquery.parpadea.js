jQuery.fn.parpadea = function() {
	this.each(function() {
		var elem = $(this);
		elem.fadeOut(250, function() {
			$(this).fadeIn(250);
		});
	});
	return this;
};
