/*
Implementa ComprobacionFecha que solicite el día, el mes y el año e indique 
si la fecha es correcta. Si lo fuera, ha de mostrar el día después.
*/

var dia, mes, anyo;

function getDia() {
	var listaDias = document.getElementById("dias");
	return parseInt(listaDias.options[listaDias.selectedIndex].value);
}

function getMes() {
	var listaMeses = document.getElementById("meses");
	return parseInt(listaMeses.options[listaMeses.selectedIndex].value);
}

function getAnyo() {
	return parseInt(document.getElementById("anyo").value.trim());
}

function esBisiesto(anyo) {
	if ((anyo % 4 == 0) && ((anyo % 100 != 0) || (anyo % 400 == 0)))
		return true;
	return false;
}

function validar() {
	var msgErr = "";
	dia = getDia();
	mes = getMes();
	anyo = getAnyo();

	if (isNaN(anyo)) {
		msgErr = "No ha introducido un año válido.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (anyo < 0) {
		msgErr = "Debe introducir un número mayor que 0";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	}

	switch(mes) {
		case 2:
			if (esBisiesto(anyo)) {
				if (dia > 29) {
					msgErr = "Error. El día seleccionado no es válido.";
					document.getElementById("msgErr").innerHTML = msgErr;
					document.getElementById("msg").innerHTML = "";
					return false;
				} 
			} else {
				if (dia > 28) {
					msgErr = "Error. El día seleccionado no es válido.";
					document.getElementById("msgErr").innerHTML = msgErr;
					document.getElementById("msg").innerHTML = "";
					return false;
				}
			}
		case 4:
		case 6:
		case 9:
		case 11:
			if (dia > 30) {
				msgErr = "Error. El día seleccionado no es válido.";
				document.getElementById("msgErr").innerHTML = msgErr;
				document.getElementById("msg").innerHTML = "";
				return false;
			}
		default:
			document.getElementById("msgErr").innerHTML = msgErr;
			return true;
	}
}

function mostrarDiaSiguiente() {
	var diaSiguiente = (dia + 1);

	switch(mes) {
		case 2:
			if (esBisiesto(anyo)) {
				if (diaSiguiente > 29) {
					diaSiguiente = 1;
					mes++;
				}
			} else {
				if (diaSiguiente > 28) {
					diaSiguiente = 1;
					mes++;
				}
			}
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			if (diaSiguiente > 30) {
				diaSiguiente = 1;
				mes++;
			}
			break;
		case 12:
			if (diaSiguiente > 31) {
				diaSiguiente = 1;
				mes = 1;
				anyo++;
			}
			break;
		default:
			if (diaSiguiente > 31) {
				diaSiguiente = 1;
				mes++;
			}
			break;
	}

	document.getElementById("msg").innerHTML = "Fecha válida. El día siguiente es " + diaSiguiente + "/" + mes + "/" + anyo + ".";
}

window.addEventListener("load", function() {
	document.formulario.enviar.addEventListener("click", function() {
		if (validar()) {
			mostrarDiaSiguiente();
		}
	});
});