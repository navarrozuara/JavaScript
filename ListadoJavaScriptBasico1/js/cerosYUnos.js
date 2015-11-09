/*
Implementa CerosYUnos que lea una secuencia de ceros y unos. 
Mostrará el número de ceros de la secuencia. 
Dejará de leer cuando el usuario introduzca el número 2.
*/

var ceros = new Array();
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
	} else if (num != 0 && num != 1 && num != 2) {
		msgErr = "Debe introducir 0 o 1.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	}

	document.getElementById("msgErr").innerHTML = msgErr;
	return true;
}

function anadirCeros() {
	var numIntroducidos = "";

	if (num == 0)
		ceros.push(num);
	else if (num == 2)
		document.getElementById("num").disabled = true;

	document.getElementById("msg").innerHTML = "<strong>Ceros introducidos:</strong> " + ceros.length;
}

function reiniciar() {
	ceros.length = 0;
	document.getElementById("num").value = "";
	document.getElementById("num").disabled = false;
	document.getElementById("msg").innerHTML = "";
}

window.addEventListener("load", function() {
	document.formulario.enviar.addEventListener("click", function() {
		if (validar()) {
			anadirCeros();
		}
	});
	document.formulario.reiniciar.addEventListener("click", reiniciar);
});