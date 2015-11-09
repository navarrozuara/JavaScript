/*
Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a mayor.
*/

var num1, num2, num3;
var msg = "";

function getNumero(id) {
	return parseInt(document.getElementById(id).value.trim());
}

function validar() {
	var msgErr = "";
	num1 = getNumero("num1");
	num2 = getNumero("num2");
	num3 = getNumero("num3");

	if (isNaN(num1)) {
		msgErr = "No ha introducido un número válido en el primer campo.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (isNaN(num2)) {
		msgErr = "No ha introducido un número válido en el segundo campo.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (isNaN(num3)) {
		msgErr = "No ha introducido un número válido en el tercer campo.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	}

	document.getElementById("msgErr").innerHTML = msgErr;
	return true;
}

function ordenarNumeros(num1, num2, num3) {
	var listaNumeros = [num1, num2, num3];

	listaNumeros.sort(function(a, b) {
		return a-b;
	});

	msg = "Orden: " + listaNumeros[0] + " <= " + listaNumeros[1] + " <= " + listaNumeros[2];

	return msg;
}

function mostrarResultado() {
	document.getElementById("msg").innerHTML = ordenarNumeros(num1, num2, num3);
}

window.addEventListener("load", function() {
	document.formulario.enviar.addEventListener("click", function() {
		if (validar()) {
			mostrarResultado();
		}
	});
});