$(document).ready(function() {
	var msg = "";
	$("#selector").change(function() {
		$("#msgSelect").html("Has seleccionado la opción: <b>" + $("#selector option:selected").text() + "</b>");
	});
	$("#check1").change(function() {
		if ($("#check1").prop("checked"))
			$("#msgCheck").html("Has seleccionado el checkbox.");
		else
			$("#msgCheck").html("");
	});
	$("#check:checked").each(function() {
		msg += $(this).attr("value") + ", ";
	});
	$("#msgCheck2").html("Hemos capturado los valores: " + msg);
	$(".fruit").on("click", function() {
		$("#msgRadio").html($(".fruit:checked").val() + " is checked!");
	});
	$("#msgRadio2").html("Hemos capturado el valor: <b>" + $(".radio:checked").val() + "</b>");
});