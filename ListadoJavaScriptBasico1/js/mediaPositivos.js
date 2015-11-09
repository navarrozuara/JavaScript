/*
Implementa MediaPositivos que calcule la media de una serie de números positivos, 
introducidos por teclado. Dejará de leer cuando el usuario introduzca el 0.
*/

var numeros = new Array();
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
		return false;
	} else if (num < 0) {
		msgErr = "Debe introducir números positivos.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	}

	document.getElementById("msgErr").innerHTML = msgErr;
	return true;
}

function anadirNumeros() {
	var numIntroducidos = "";

	if (num == 0)
		document.getElementById("num").disabled = true;
	else 
		numeros.push(num);

	if (numeros.length != 0)
		numIntroducidos = numeros.toString();
	else 
		numIntroducidos = "Ninguno."

	document.getElementById("numeros").innerHTML = "<strong>Números introducidos:</strong> " + numIntroducidos;
}

function calcularMedia() {
	var suma = 0;
	var media = 0;

	for (var i = 0; i < numeros.length; i++)
		suma += numeros[i];
	media = suma/numeros.length;

	if (isNaN(media))
		document.getElementById("msgErr").innerHTML = "Introduzca números en la lista.";
	else 
		document.getElementById("msg").innerHTML = "<strong>Media:</strong> " + media;
}

function reiniciar() {
	numeros.length = 0;
	document.getElementById("num").value = "";
	document.getElementById("num").disabled = false;
	document.getElementById("numeros").innerHTML = "";
	document.getElementById("msg").innerHTML = "";
}

window.addEventListener("load", function() {
	document.formulario.enviar.addEventListener("click", function() {
		if (validar()) {
			anadirNumeros();
		}
	});
	document.formulario.calcular.addEventListener("click", calcularMedia);
	document.formulario.reiniciar.addEventListener("click", reiniciar);
});