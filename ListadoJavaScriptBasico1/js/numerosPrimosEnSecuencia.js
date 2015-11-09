/*
Implementa NumerosPrimosEnSecuencia que pida un número e indique 
cuántos números primos existen entre el 1 y dicho número.
*/

function getNumero() {
	return document.getElementById("num").value.trim();
}

function validar() {
	var msgErr = "";
	var num = getNumero();

	if (isNaN(parseInt(num))) {
		msgErr = "No ha introducido un número válido.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (num < 1) {
		msgErr = "Debe introducir un número mayor que 1.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (num % 1 != 0) {
		msgErr = "No puede introducir números decimales.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	}

	document.getElementById("msgErr").innerHTML = msgErr;
	return true;
}

function esPrimo(num) {
	var primo = true;

	for (var i = 2; i < num; i++) {
		if (num % i == 0)
			primo = false;
	}

	return primo;
}

function mostrarResultado() {
	var primos = new Array();
	var numPrimos = 0;

	for (var i = 2; i < getNumero(); i++) {
		if (esPrimo(i)) {
			numPrimos++;
			primos.push(i);
		}	
	}

	if (numPrimos > 0)
		document.getElementById("msg").innerHTML = "Entre el 1 y el " + getNumero() + " hay " + numPrimos + " números primos. Números primos: " + primos.toString();
	else
		document.getElementById("msg").innerHTML = "No hay ningún número primo entre el 1 y el " + getNumero();
}

window.addEventListener("load", function() {
	document.formulario.enviar.addEventListener("click", function() {
		if (validar()) {
			mostrarResultado();
		}
	});
});