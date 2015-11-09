/*
Implementa CalculaMedia que pida números hasta que se introduzca uno negativo. 
Entonces, que muestre la media.
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
	}

	document.getElementById("msgErr").innerHTML = msgErr;
	return true;
}

function anadirNumeros() {
	var numIntroducidos = "";

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
	document.formulario.enviar.disabled = false;
	document.getElementById("numeros").innerHTML = "";
	document.getElementById("msg").innerHTML = "";
}

function mostrarResultado() {
	if (num >= 0)
		anadirNumeros();
	else {
		document.formulario.enviar.disabled = true;
		calcularMedia();
	}	
}

window.addEventListener("load", function() {
	document.formulario.enviar.addEventListener("click", function() {
		if (validar()) {
			mostrarResultado();
		}
	});
	document.formulario.reiniciar.addEventListener("click", reiniciar);
});