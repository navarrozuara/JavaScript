$(document).ready(function() {
	$("input.fecha").attr("value", function(indiceArray) {
		var f = new Date();
		return f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
	});
});