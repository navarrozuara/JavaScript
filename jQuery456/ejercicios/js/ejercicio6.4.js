$(document).ready(function() {
	$("#elemento1").mouseenter(function(evento) {
		$("#tip1").css("left", evento.pageX + 5);
		$("#tip1").css("top", evento.pageY + 5);
		$("#tip1").css("display", "block");
	});
	$("#elemento1").mouseleave(function(evento) {
		$("#tip1").css("display", "none");
	});
	$("#elemento2").mouseenter(function(evento) {
		$("#tip2").css("left", evento.pageX + 5);
		$("#tip2").css("top", evento.pageY + 5);
		$("#tip2").css("display", "block");
	});
	$("#elemento2").mouseleave(function(evento) {
		$("#tip2").css("display", "none");
	});
});