$(document).ready(function() {
	$(document).on("mousemove", function(event) {
		$("#mousemove").html("<b>X:</b> " + event.pageX + ", <b>Y:</b> " + event.pageY);
		$("#currentTarget").html("<b>currentTarget:</b> " + event.currentTarget);
		$("#timestamp").html("<b>timeStamp:</b> " + event.timeStamp);
	});
});