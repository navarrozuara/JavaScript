$(document).ready(function() {
	$("a").mouseover(function(evento) {
		$("#capa").addClass("clasecss");
	});
	$("a").mouseout(function(evento) {
		$("#capa").removeClass("clasecss");
	});
});