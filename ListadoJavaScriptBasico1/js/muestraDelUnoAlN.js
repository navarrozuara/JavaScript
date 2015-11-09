/*
Implementa MuestraDelUnoAlN que pida un número entero y que muestre 
la secuencia del 1 al número indicado. En caso de no poder generarse 
la secuencia (menor que 1), que lo indique.
*/

var num;

function getNumero() {
	return parseInt(document.getElementById("num").value.trim());
}

function validar() {
	var msgErr = "";
	num = getNumero();

	if (isNaN(num)) {
		msgErr = "No ha introducido un número válido.";
		document.getElementById("msgErr").innerHTML = msgErr;
		document.getElementById("msg").innerHTML = "";
		return false;
	} else if (num < 1) {
		msgErr = "No se ha podido generar la secuencia.";
		document.getElementById("msgErr").innerHTML = msgErr;
		document.getElementById("msg").innerHTML = "";
		return false;
	}

	document.getElementById("msgErr").innerHTML = msgErr;
	return true;
}

function mostrarDelUnoAlN() {
	var msg = "";

	for (var i = 1 ; i <= num; i++) {
		if (i != num)
			msg += i + " - ";
		else
			msg += i + ".";
	}

	document.getElementById("msg").innerHTML = "<strong>Secuencia:</strong> " + msg;
}

window.addEventListener("load", function() {
	document.formulario.enviar.addEventListener("click", function() {
		if (validar()) {
			mostrarDelUnoAlN();
		}
	});
});