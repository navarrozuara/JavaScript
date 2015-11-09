/*
Implementa DeSieteEnSiete que escriba los números del 100 al 0 de 7 en siete.
*/

function deSieteEnSiete() {
	var msg = "";
	for (var i = 100; i > 0; i-=7)
		msg += i + ", ";
	document.getElementById("msg").innerHTML = msg;
}

window.addEventListener("load", function() {
	document.getElementById("enviar").addEventListener("click", deSieteEnSiete);
});