$(document).ready(function() {
	var numClics = 0;
	var numDobleClics = 0;
	$("#micapa").dblclick(function(evento) {
		numDobleClics++;
		$("#mensaje").html("Doble Clic " + numDobleClics);
	});
	$("#micapa").click(function(evento) {
		numClics++;
		$("#mensaje").html("Clic " + numClics);
	});
});