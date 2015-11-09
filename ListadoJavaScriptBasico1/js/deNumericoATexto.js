/*
Implementa DeNumericoATexto que solicite un número del 0 al 99 y lo muestre 
escrito. Por ejemplo, para 12 mostrar: doce, para 44 mostrar: cuarenta y cuatro. 
Que sea lo más eficiente posible.
*/

var num;

function getNumero() {
	return document.getElementById("num").value.trim();
}

function validar() {
	var msgErr = "";
	num = getNumero();

	if (isNaN(parseInt(num))) {
		msgErr = "No ha introducido un número válido.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (num < 0) {
		msgErr = "Debe introducir un número mayor que 0.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (num > 99) {
		msgErr = "Debe introducir un número menor que 99.";
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

function numeroATexto() {
	var texto = "";
	var prefijo = "";

	if (num.length == 1) {
		switch (num) {
			case "0":
				texto = "cero";
				break;
			case "1":
				texto = "uno";
				break;
			case "2":
				texto = "dos";
				break;
			case "3":
				texto = "tres";
				break;
			case "4":
				texto = "cuatro";
				break;
			case "5":
				texto = "cinco";
				break;
			case "6":
				texto = "seis";
				break;
			case "7":
				texto = "siete";
				break;
			case "8":
				texto = "ocho";
				break;
			case "9":
				texto = "nueve";
				break;
		}
	} else if (num.length == 2 && num.charAt(0) == "1") {
		switch(num) {
			case "10":
				texto = "diez";
				break;
			case "11":
				texto = "once";
				break;
			case "12":
				texto = "doce";
				break;
			case "13":
				texto = "trece";
				break;
			case "14":
				texto = "catorce";
				break;
			case "15":
				texto = "quince";
				break;
			case "16":
				texto = "dieciséis";
				break;
			case "17":
				texto = "diecisiete";
				break;
			case "18":
				texto = "dieciocho";
				break;
			case "19":
				texto = "diecinueve";
				break;
		}
	} else if (num.length == 2 && num.charAt(0) == "2") {
		switch(num) {
			case "20":
				texto = "veinte";
				break;
			case "21":
				texto = "veintiuno";
				break;
			case "22":
				texto = "veintidos";
				break;
			case "23":
				texto = "veintitres";
				break;
			case "24":
				texto = "veinticuatro";
				break;
			case "25":
				texto = "veinticinco";
				break;
			case "26":
				texto = "veintiseis";
				break;
			case "27":
				texto = "veintisiete";
				break;
			case "28":
				texto = "veintiocho";
				break;
			case "29":
				texto = "veintinueve";
				break;
		}
	} else if (num.length == 2) {
		switch(num.charAt(0)) {
			case "3":
				prefijo = "treint";
				break;
			case "4":
				prefijo = "cuarent";
				break;
			case "5":
				prefijo = "cincuent";
				break;
			case "6":
				prefijo = "sesent";
				break;
			case "7":
				prefijo = "setent";
				break;
			case "8":
				prefijo = "ochent";
				break;
			case "9":
				prefijo = "novent";
				break;

		}
		switch(num.charAt(1)) {
			case "0":
				texto = prefijo + "a";
				break;
			case "1":
				texto = prefijo + "a y uno";
				break;
			case "2":
				texto = prefijo + "a y dos";
				break;
			case "3":
				texto = prefijo + "a y tres";
				break;
			case "4":
				texto = prefijo + "a y cuatro";
				break;
			case "5":
				texto = prefijo + "a y cinco";
				break;
			case "6":
				texto = prefijo + "a y seis";
				break;
			case "7":
				texto = prefijo + "a y siete";
				break;
			case "8":
				texto = prefijo + "a y ocho";
				break;
			case "9":
				texto = prefijo + "a y nueve";
				break;
		}
	}

	document.getElementById("msg").innerHTML = "De número a texto: " + texto + ".";
}

window.addEventListener("load", function() {
	document.formulario.enviar.addEventListener("click", function() {
		if (validar()) {
			numeroATexto();
		}
	});
});