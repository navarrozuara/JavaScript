$(document).ready(function() {
	function muestraRestantesCola() {
		var numFuncionesEnCola = $("#micapa").queue().length;
		$("#mensaje").text("En el momento de hacer el último clic en los botones hay " + numFuncionesEnCola + " funciones de efectos en cola.");
	}
	$("#botonfade").click(function() {
		var capa = $("#micapa");
		capa.fadeOut(500);
		capa.fadeIn(500);
		muestraRestantesCola();
	});
	$("#botonslide").click(function() {
		capa = $("#micapa");
		capa.slideUp(500);
		capa.slideDown(500);
		muestraRestantesCola();
	});
	$("#botontamanocola").click(function() {
		muestraRestantesCola();
	});
});
