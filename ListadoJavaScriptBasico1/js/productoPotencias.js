/*
Implementa ProductoPotencias que calcule y visualice 
el producto de las potencias de 2 entre 0 y 10.
*/

function productoPotencias() {
	var msg = "";
	var potencia;
	var resultado = 1;

	for (var i = 0; i <= 10; i++) {
		potencia = Math.pow(2, i);

		if (i != 10)
			msg += "2^" + i + " * ";
		else
			msg += "2^" + i + " = ";

		resultado *= potencia;
	}

	document.getElementById("msg").innerHTML = msg + resultado;
}

window.addEventListener("load", function() {
	document.getElementById("enviar").addEventListener("click", productoPotencias);
});