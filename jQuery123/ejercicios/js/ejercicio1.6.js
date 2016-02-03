$(document).ready(function() {
	$("#ocultar").click(function(evento) {
		evento.preventDefault();
		$("#capaefectos").hide("slow");
	});
	$("#mostrar").click(function(evento) {
		evento.preventDefault();
		$("#capaefectos").show(3000);
	});
});