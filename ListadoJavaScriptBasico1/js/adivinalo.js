/*
Implementa el juego "Adivínalo". Consiste en que el usuario ha de 
adivinar un número entre el 1 y el 100. Mostrará un mensaje:
	a. Para indicar si has acertado (en una nueva ventana).
	b. Para indicar si la solución es mayor o es menor.

Al finalizar, se le preguntará al usuario si quiere repetir el juego.
*/

var numInterno;

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
	} else if (num > 100) {
		msgErr = "Debe introducir un número menor que 100.";
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

function nuevoJuego() {
	numInterno = Math.ceil(Math.random()*100);

	document.getElementById("num").value = "";
	document.getElementById("msg").innerHTML = "";
}

function adivinalo(num) {
	var msg = "";
	var nuevaVentana, againButton;

	if (num < numInterno) {
		msg = "El número que debes adivinar es mayor.";
		document.getElementById("msg").innerHTML = msg;
	} else if (num > numInterno) {
		msg = "El número que debes adivinar es menor.";
		document.getElementById("msg").innerHTML = msg;
	} else if (num == numInterno) {
		nuevaVentana = window.open("", "MsgWindow");
		nuevaVentana.document.open();
		nuevaVentana.document.write("<h1>¡Enhorabuena, has acertado!</h1>");
		nuevaVentana.document.write("<button id=\"again\">Jugar otra vez</button>");
		nuevaVentana.document.close();
		againButton = nuevaVentana.document.getElementById("again");
		againButton.addEventListener("click", function() {
			nuevaVentana.close();
			nuevoJuego();
		});
	}
}

window.addEventListener("load", function() {
	nuevoJuego();
	document.formulario.enviar.addEventListener("click", function() {
		if (validar()) {
			adivinalo(getNumero());
		}
	});
});