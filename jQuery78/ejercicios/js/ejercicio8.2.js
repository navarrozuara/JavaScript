$(document).ready(function() {
	$("#ocultartoda").click(function(evento) {
		$("#milista").fadeOut();
	});
	$("#mostrartoda").click(function(evento) {
		$("#milista").fadeIn();
	});
	$("#ocultarmostrar").click(function(evento) {
		$("#milista").fadeOut(function() {
			$(this).fadeIn();
		});
	});
	$("#selopacidad").change(function(evento) {
		var opacidad_deseada = evento.target.options[evento.target.selectedIndex].value;
		$("h1").fadeTo(1000,opacidad_deseada);
	});
	$("#pororden").click(function(evento) {
		var opacidad_deseada = $("#selopacidad").prop("value");
		$("#e1").fadeTo(500, opacidad_deseada, function() {
			$("#e2").fadeTo(500, opacidad_deseada, function() {
				$("#e3").fadeTo(500, opacidad_deseada);
			});
		});
	});
});