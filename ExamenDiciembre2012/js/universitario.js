/**
Define la clase Universitario con los siguientes atributos: nombre, apellido1, 
apellido2 y fecha de nacimiento. Además, define el método mostrar que mostrará 
el nombre, apellidos y edad en una nueva ventana.
Cuando se pulse el botón Crear se creará un objeto de la clase universitario tras 
la validación de los datos introducidos. Las condiciones de validación son las 
siguientes:
	1. Ningún campo puede estar vacío.
	2. El formato de la fecha ha de ser el indicado (utiliza expresiones regulares).
	3. La fecha ha de ser correcta (comprobar que sea real, incluyendo los 29 de Febrero).
	4. El checkbox ha de seleccionarse.
Se mostrará un mensaje indicando que alguno de los datos no es correcto.
Una vez creado el universitario, se invocará al método mostrar que abrirá la nueva 
ventana con los datos introducidos por el usuario y la edad del universitario.
Una vez creado el universitario, se creará una cookie que guarde la información.
Si existiera alguna cookie almacenada, mostraría sus datos la siguiente vez. 
El botón Limpiar limpia la información del formulario y elimina la cookie.
*/

function Universitario(nombre, apellido1, apellido2, fechaNacimiento) {
	this.nombre = nombre;
	this.apellido1 = apellido1;
	this.apellido2 = apellido2;
	this.fechaNacimiento = fechaNacimiento;
}

Universitario.prototype.mostrar = function() {
	var nuevaVentana = window.open("", "", "width=300,height=200");
	nuevaVentana.document.open();
	nuevaVentana.document.write('<!DOCTYPE html>'
			+ '<html>'
			+ '<head>'
			+ '		<meta charset="UTF-8">'
			+ '		<title>Elisa Navarro Zuara</title>'
			+ '</head>'
			+ '<body>'
			+ '		<p>Nombre: ' + this.nombre + '</p>'
			+ '		<p>Primer Apellido: ' + this.apellido1 + '</p>'
			+ '		<p>Segundo Apellido: ' + this.apellido2 + '</p>'
			+ '		<p>Edad: ' + this.getEdad() + ' años.</p>'
			+ '</body>'
			+ '</html>');
	nuevaVentana.document.close();
}

Universitario.prototype.getEdad = function() {
	var hoy = new Date();
	var edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();

	if (hoy.getMonth() < this.fechaNacimiento.getMonth())
		edad--;

	if (hoy.getMonth() == this.fechaNacimiento.getMonth())
		if (hoy.getDate() < this.fechaNacimiento.getDate())
			edad--;

	return edad;
}

window.addEventListener('load', function() {
	var universitario,
		nombre,
		apellido1,
		apellido2,
		fechaNacimiento,
		regEx,
		arrayFecha,
		fecha,
		aceptar;
	var msgErr = document.getElementById("msgErr");

	function validar() {
		nombre = document.getElementById("nombre").value;
		apellido1 = document.getElementById("apellido1").value;
		apellido2 = document.getElementById("apellido2").value;
		fechaNacimiento = document.getElementById("fechaNacimiento").value;

		if (nombre === "" || apellido1 === "" || apellido2 === "" || fechaNacimiento === "") {
			msgErr.innerHTML = "Ningún campo puede estar vacío.";
			return false;
		}

		regEx = new RegExp('^((0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-(19[0-9]{2}|20[0-9]{2}))$');
		if (!regEx.test(fechaNacimiento)) {
			msgErr.innerHTML = "El formato de fecha no es correcto.";
			return false;
		}

		arrayFecha = fechaNacimiento.split("-");
		fecha = new Date(arrayFecha[2], arrayFecha[1]-1, arrayFecha[0]);
		if (fecha.getDate() != arrayFecha[0]) {
			msgErr.innerHTML = "La fecha introducida no es correcta.";
			return false;
		}

		aceptar = document.getElementById("aceptar");
		if (!aceptar.checked) {
			msgErr.innerHTML = "Debe aceptar las condiciones.";
			return false;
		}

		msgErr.innerHTML = ""
		return true;
	}

	function crearCookies() {
		setCookie("nombre", nombre, 2);
		setCookie("apellido1", apellido1, 2);
		setCookie("apellido2", apellido2, 2);
		setCookie("fechaNacimiento", fechaNacimiento, 2);
	}

	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) == 0) 
				return c.substring(name.length, c.length);
		}
		return "";
	}

	document.getElementById("crear").addEventListener('click', function() {
		if (validar()) {
			universitario = new Universitario(nombre, apellido1, apellido2, fecha);
			crearCookies();
			universitario.mostrar();
		}
	});

	document.getElementById("limpiar").addEventListener('click', function() {
		setCookie("nombre", "", -1);
		setCookie("apellido1", "", -1);
		setCookie("apellido2", "", -1);
		setCookie("fechaNacimiento", "", -1);
	});

	document.getElementById("nombre").value = getCookie("nombre");
	document.getElementById("apellido1").value = getCookie("apellido1");
	document.getElementById("apellido2").value = getCookie("apellido2");
	document.getElementById("fechaNacimiento").value = getCookie("fechaNacimiento");
});