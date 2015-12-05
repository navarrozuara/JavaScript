/**
Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el usuario.
Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un peso (1-15). 
Cada vez que crees un objeto gato aparecerá una ventana nueva con una imagen que 
cambiará en función de su estado (comiendo, durmiendo y jugando, que es su estado habitual). 
El usuario podrá averiguar la edad del gato partiendo de un evento.
	1. Evita las cajas de texto.
	2. No puedes usar ni alert ni prompt.
	3. Hazlo lo más dinámico posible.
	4. Utiliza prototype para los métodos.
*/

var misGlobales = {
	gato: undefined
}

function inicio() {
	var nombre,
		dia,
		mes,
		anio,
		fechaNacimiento,
		raza,
		peso;
	var msgErr = document.getElementById("msgErr");

	function validarDatos() {
		nombre = document.getElementById("nombre").value;
		dia = parseInt(document.getElementById("dia").value);
		mes = document.getElementById("mes");
		for (var i = 0; i < mes.options.length; i++) {
			if (mes.options[i].selected) {
				mes = parseInt(mes.options[i].value);
				break;
			}
		}
		anio = parseInt(document.getElementById("anio").value);
		fechaNacimiento = new Date(anio, mes-1, dia);
		raza = document.getElementById("raza");
		for (var i = 0; i < raza.options.length; i++) {
			if (raza.options[i].selected) {
				raza = raza.options[i].value;
				break;
			}
		}
		peso = parseInt(document.getElementById("peso").value);

		if (nombre === "") {
			msgErr.innerHTML = "El nombre está vacío.";
			return false;
		} else if (!isNaN(nombre)) {
			msgErr.innerHTML = "Su gato debería tener alguna letra en el nombre...";
			return false;
		} else if (isNaN(dia) || dia < 1 || dia > 31) {
			msgErr.innerHTML = "El día de nacimiento introducido no es válido.";
			return false;
		} else if (isNaN(anio) || anio < 1900 || anio > new Date().getFullYear()) {
			msgErr.innerHTML = "El año de nacimiento introducido no es válido.";
			return false;
		} else if (fechaNacimiento >= new Date()) {
			msgErr.innerHTML = "La fecha de nacimiento introducida no es válida.";
			return false;
		} else if (isNaN(peso)) {
			msgErr.innerHTML = "El peso está vacío.";
			return false;
		}

		msgErr.innerHTML = "";
		return true;
	}

	function crearGato() {
		if (validarDatos()) {
			try {
				misGlobales.gato = new Gato(nombre, dia, mes, anio, raza, peso);
				msgErr.innerHTML = "";
			} catch (e) {
				msgErr.innerHTML = e.message;
			}
		}			
	}

	document.getElementById("crearGato").addEventListener("click", crearGato);
}

window.addEventListener("load", inicio);