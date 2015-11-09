/*
Implementa PiramideDos que mediante un bucle for 
visualice una pirámide del siguiente tipo:
1
12
123
1234
12345
123456
1234567
12345678
123456789
1234567890
*/

function mostrarPiramide() {
	var msg = "";

	for (var i = 1; i <= 10; i++) {
		for (var j = 1; j <= i; j++)
			msg += j % 10;
		msg += "<br />";
	}

	document.getElementById("msg").innerHTML = msg;
}

window.addEventListener("load", function() {
	document.getElementById("enviar").addEventListener("click", mostrarPiramide);
});