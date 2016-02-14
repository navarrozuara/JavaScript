$(document).ready(function() {
	$("#elemento").bind({
		click: function() {
			$(this).css("color", "blue");
		},
		mouseenter: function() {
			$(this).css("font-size", "24px");
		},
		mouseleave: function() {
			$(this).css("font-size", "16px");
			$(this).css("color", "black");
		}
	});
});