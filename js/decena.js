/*
Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique: 
	a.  Cuántas cifras tiene (7 cifras).
	b.  Lo muestre del revés.
*/

var num;

function getNumero() {
	return document.getElementById("num").value.trim();
}

function validar() {
	var msgErr = "";
	num = getNumero();

	if (isNaN(num)) {
		msgErr = "No ha introducido un número válido.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (num <= 0) {
		msgErr = "Debe introducir un número mayor que 0.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (num >= 10) {
		msgErr = "Debe introducir un número menor que 10.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	}

	document.getElementById("msgErr").innerHTML = msgErr;
	return true;
}

function invertirNum(num) {
	var numInvertido = "";
	for (var i = (num.length-1); i >= 0; i--)
		numInvertido += num.charAt(i);	
	return numInvertido;
}

function mostrarResultado() {
	document.getElementById("msg").innerHTML = "<strong>Cifras:</strong> " + num.length + "<br /><strong>Número al revés:</strong> " + invertirNum(num);
}

window.addEventListener("load", function() {
	document.formulario.enviar.addEventListener("click", function() {
		if (validar()) {
			mostrarResultado();
		}
	});
});