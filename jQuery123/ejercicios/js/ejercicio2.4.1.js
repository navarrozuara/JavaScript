$(document).ready(function() {
	$("p").each(function(i) {
		if (i%2==0) {
			$(this).css("background-color", "#EEEEEE");
		} else {
			$(this).css("background-color", "#CCCCCC");
		}
	});
});