$(document).ready(function() {
	$("#a").click(function(evento) {
		$('#capa').html('Has hecho clic en el botón <b>A</b>');
	});
	$("#b").click(function(evento) {
		$('#capa').html('Recibido un clic en el botón <b>B</b>');
	});
});