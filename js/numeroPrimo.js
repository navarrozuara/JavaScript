/*
Implementa NumeroPrimo que pida un número e indique si es primo o no.
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
		document.getElementById("msg").innerHTML = "";
		return false;
	} else if (num < 1) {
		msgErr = "Debe introducir un número mayor que 1.";
		document.getElementById("msgErr").innerHTML = msgErr;
		document.getElementById("msg").innerHTML = "";
		return false;
	} else if (num % 1 != 0) {
		msgErr = "No puede introducir números decimales.";
		document.getElementById("msgErr").innerHTML = msgErr;
		document.getElementById("msg").innerHTML = "";
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
	if (esPrimo(getNumero()))
		document.getElementById("msg").innerHTML = "El número introducido es primo.";
	else 
		document.getElementById("msg").innerHTML = "El número introducido no es primo.";
}

window.addEventListener("load", function() {
	document.formulario.enviar.addEventListener("click", function() {
		if (validar()) {
			mostrarResultado();
		}
	});
});