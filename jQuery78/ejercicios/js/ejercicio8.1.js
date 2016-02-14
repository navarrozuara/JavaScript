$(document).ready(function() {
	$("#animar").click(function(evento) {
		evento.preventDefault();
		$("h1").animate({
			'border-bottom-width': "20px",
			'font-size': '25pt'
		});
	});
	$("#restaurar").click(function(evento) {
		evento.preventDefault();
		$("h1").css({
			'border-bottom-width': "1px",
			'font-size': '15pt'
		});
	});
});