/*
Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique 
si es correcta. Si lo fuera, ha de mostrar la hora un segundo después.
*/

var hora, minuto, segundo;

function getHora() {
	return parseInt(document.getElementById("horas").value.trim());
}

function getMinuto() {
	return parseInt(document.getElementById("minutos").value.trim());
}

function getSegundo() {
	return parseInt(document.getElementById("segundos").value.trim());
}

function validar() {
	var msgErr = "";
	hora = getHora();
	minuto = getMinuto();
	segundo = getSegundo();

	if (isNaN(hora) || isNaN(minuto) || isNaN(segundo)) {
		msgErr = "No ha introducido un valor válido.";
		document.getElementById("msgErr").innerHTML = msgErr;
		document.getElementById("msg").innerHTML = "";
		return false;
	} else if (hora < 0 || hora > 23) {
		msgErr = "No ha introducido una hora válida.";
		document.getElementById("msgErr").innerHTML = msgErr;
		document.getElementById("msg").innerHTML = "";
		return false;
	} else if (minuto < 0 || minuto > 59) {
		msgErr = "No ha introducido un minuto válido.";
		document.getElementById("msgErr").innerHTML = msgErr;
		document.getElementById("msg").innerHTML = "";
		return false;
	} else if (segundo < 0 || segundo > 59) {
		msgErr = "No ha introducido un segundo válido.";
		document.getElementById("msgErr").innerHTML = msgErr;
		document.getElementById("msg").innerHTML = "";
		return false;
	}
	
	document.getElementById("msgErr").innerHTML = msgErr;
	return true;
}

function mostrarSegundoSiguiente() {
	var segundoSiguiente = (segundo + 1);

	if (segundoSiguiente > 59) {
		segundoSiguiente = 0;
		minuto++;
		if (minuto > 59) {
			minuto = 0;
			hora++;
			if (hora > 23) {
				hora = 0;
			}
		}
	}

	document.getElementById("msg").innerHTML = "Hora válida. El segundo siguiente es " + hora + ":" + minuto + ":" + segundoSiguiente + ".";
}

window.addEventListener("load", function() {
	document.formulario.enviar.addEventListener("click", function() {
		if (validar()) {
			mostrarSegundoSiguiente();
		}
	});
});