/*
Implementa Pirámide que mediante un bucle for 
visualice una pirámide del siguiente tipo:
1
22
333
4444
55555
666666
7777777
88888888
999999999
0000000000
*/

function mostrarPiramide() {
	var msg = "";

	for (var i = 1; i <= 10; i++) {
		for (var j = 1; j <= i; j++)
			msg += i % 10;
		msg += "<br />";
	}

	document.getElementById("msg").innerHTML = msg;
}

window.addEventListener("load", function() {
	document.getElementById("enviar").addEventListener("click", mostrarPiramide);
});