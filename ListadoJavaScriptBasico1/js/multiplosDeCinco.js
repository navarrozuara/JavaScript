/*
Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de 5.
*/

function validar() {
	var msgErr = "";

	if (isNaN(document.getElementById("num1").value.trim())) {
		msgErr = "No ha introducido un número válido en el primer campo.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (isNaN(document.getElementById("num2").value.trim())) {
		msgErr = "No ha introducido un número válido en el segundo campo.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (isNaN(document.getElementById("num3").value.trim())) {
		msgErr = "No ha introducido un número válido en el tercer campo.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (isNaN(document.getElementById("num4").value.trim())) {
		msgErr = "No ha introducido un número válido en el cuarto campo.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (isNaN(document.getElementById("num5").value.trim())) {
		msgErr = "No ha introducido un número válido en el quinto campo.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (isNaN(document.getElementById("num6").value.trim())) {
		msgErr = "No ha introducido un número válido en el sexto campo.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (isNaN(document.getElementById("num7").value.trim())) {
		msgErr = "No ha introducido un número válido en el séptimo campo.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	}

	document.getElementById("msgErr").innerHTML = msgErr;
	return true;
}

function mostrarMultiplosDeCinco(formulario) {
	var multiplos = new Array();
	var msg = "";

	for (var i = 0; i < formulario.length; i++) {
		if (formulario.elements[i].value % 5 == 0)
			multiplos.push(formulario.elements[i].value);
	}

	if (multiplos.length != 0) 
		msg = multiplos.toString();
	else
		msg = "No hay ningún múltiplo de 5.";

	document.getElementById("msg").innerHTML = msg;
}

window.addEventListener("load", function() {
	document.formulario.enviar.addEventListener("click", function() {
		if (validar()) {
			mostrarMultiplosDeCinco(document.forms.formulario);
		}
	});
});