$(document).ready(function() {
	$("#mitexto").keypress(function(evento) {
		evento.preventDefault();
		$("#loescrito").html(evento.which + ": " + String.fromCharCode(evento.which));
	});
});