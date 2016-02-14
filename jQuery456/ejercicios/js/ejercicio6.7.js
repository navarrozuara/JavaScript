$(document).ready(function() {
	$("body").on("click", ".verde", function(evento) {
		var elem = $(this);
		if (elem.html() != "Hiciste clic!!")
			elem.html("Hiciste clic!!");
		else
			elem.html("Hiciste de nuevo clic!!");
	});
	$("#insertarelem").click(function(evento) {
		var nuevoElemento = $('<div class="verde">Este elemento se ha creado e insertado dinamicamente (haz clic)</div>');
		nuevoElemento.appendTo($(document.body));
	});
	$("#ponerclaseverde").click(function(evento) {
		$("#noverde").addClass("verde");
	});
});