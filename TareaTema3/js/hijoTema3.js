/*
Hacer una función y dentro de esa función:
	a. Escribir en la nueva ventana <h1>Ventana Nueva</h1>.
	b. URL Completa: XXXXX
	c. Protocolo utilizado: XXXXX
	d. Nombre en código del navegador: XXXXX
	e. Que detecte si está JAVA disponible en esa ventana del navegador y si es así que escriba:
		Java SI disponible en esta ventana, o bien.
		Java NO disponible en esta ventana.
	f. Que abra una ventana con el contenido de http://www.iesgrancapitan.org/portal/ de 800x600.
*/

var nombre, dia, mes, anio, fecha;

// Crea el contenido de la ventana hija.
function crearContenido() {
	var disponible = "";

	if (navigator.javaEnabled())
		disponible = "SI";
	else
		disponible = "NO";

	document.body.innerHTML = "<header><h1>Ventana Nueva</h1></header>"
							+ "<p><strong>URL Completa:</strong> " + window.location.href + "</p>"
							+ "<p><strong>Protocolo utilizado:</strong> " + window.location.protocol + "</p>"
							+ "<p><strong>Nombre en código del navegador:</strong> " + navigator.userAgent + "</p>"
							+ "<p>Java " + disponible +  " disponible en esta ventana.</p>";

	window.open("http://www.iesgrancapitan.org/portal/", "IES Gran Capitan", "width=800,height=600");
}

/*
2. Y ahora fuera del código de la función que siga haciendo lo siguiente:
	a. Que escriba en la ventana principal <h1>Tarea del tema 3</h1>
	b. Que solicite: introduzca su nombre y apellidos.
	c. Que solicite: introduzca DIA de nacimiento.
	d. Que solicite: introduzca MES de nacimiento.
	e. Que solicite: introduzca AÑO de nacimiento.
	f. Una vez solicitados esos datos imprimirá en la ventana principal:
		Buenos dias XXXXX
		Tu nombre tiene XX caracteres, incluidos espacios.
		La primera letra E de tu nombre está en la posición: X
		La última letra E de tu nombre está en la posición: X
		Tu nombre menos las 3 primeras letras es: XXXXXXXX
		Tu nombre todo en mayúsculas es: XXXXXXXX
		Tu edad es: XX años.
		Naciste un feliz XXXXXX del año XXXX. No te acuerdas, pero era (LUNES/MARTES/MIÉRCOLES...) y [NO|SI] bisiesto
		El coseno de 90 es: XXXXXXXXXX
		El número mayor de (65, 22, 69, 99, 12) es: XX
		Ejemplo de número al azar entre 1 y 10: XXXXXXXXXX
*/

// Devuelve el nombre introducido por el usuario.
function getNombre() {
	return document.getElementById("nombreCompleto").value.trim();
}

// Devuelve el día introducido por el usuario.
function getDia() {
	return document.getElementById("dia").value.trim();
}

// Devuelve el mes introducido por el usuario.
function getMes() {
	return document.getElementById("mes").value.trim();
}

// Devuelve el año introducido por el usuario.
function getAnio() {
	return document.getElementById("anio").value.trim();
}

// Valida los datos introducidos por el usuario.
function validar() {
	var msgErr = "";
	var regEx = /^([a-zA-ZÑñáéíóú\s]{2,})$/i;
	nombre = getNombre();
	dia = getDia();
	mes = getMes()-1;
	anio = getAnio();
	fecha = new Date(anio, mes, dia);

	if (nombre == "" || dia == "" || mes == "" || anio == "") {
		msgErr = "No puede dejar en blanco ningún campo del formulario.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (isNaN(dia) || parseInt(dia) < 1 || parseInt(dia) > 31) {
		msgErr = "No ha introducido un día válido.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (isNaN(mes) || parseInt(getMes()) < 1 || parseInt(getMes()) > 12) {
		msgErr = "No ha introducido un mes válido.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (isNaN(anio) || parseInt(anio) < 1 || parseInt(anio) > new Date().getFullYear()) {
		msgErr = "No ha introducido un año válido.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (dia != fecha.getDate() || mes != fecha.getMonth() || anio != fecha.getFullYear() || fecha >= new Date()) {
		msgErr = "No ha introducido una fecha válida.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	} else if (!regEx.test(nombre)) {
		msgErr = "El nombre introducido no es válido.";
		document.getElementById("msgErr").innerHTML = msgErr;
		return false;
	}

	document.getElementById("msgErr").innerHTML = msgErr;
	return true;
}

// Muestra el resultado cuando el formulario es recibido.
function mostrarResultado() {
	window.opener.document.body.innerHTML += "<p class=\"contenido\">Buenos días " + nombre + "<br />"
										  + "Tu nombre tiene " + nombre.length + " caracteres, incluidos espacios.<br />"
										  + "La primera letra E de tu nombre está en la posición: " + nombre.toLowerCase().indexOf("e") + "<br />"
										  + "La última letra E de tu nombre está en la posición: " + nombre.toLowerCase().lastIndexOf("e") + "<br />"
										  + "Tu nombre menos las 3 primeras letras es: " + nombre.substr(3) + "<br />"
										  + "Tu nombre todo en mayúsculas es: " + nombre.toUpperCase() + "<br />"
										  + "Tu edad es: " + calcularEdad() + " años.<br />"
										  + "Naciste un feliz " + dia + "/" + getMes() + " del año " + anio 
										  + ". No te acuerdas, pero era " + getDiaSemana() + " y " + esBisiesto(anio) + " bisiesto.<br />"
										  + "El coseno de 90 es: " + Math.round(Math.cos((Math.PI)/2)) + "<br />"
										  + "El número mayor de (65, 22, 69, 99, 12) es: " + getMayor() + "<br />"
										  + "Ejemplo de número al azar entre 1 y 10: " + Math.floor(Math.random()*11) + "</p>";
}

// Calcula la edad según la fecha introducida.
function calcularEdad() {
	var fechaActual = new Date();
	return parseInt((fechaActual-fecha)/365/24/60/60/1000);
}

// Devuelve el día de la semana.
function getDiaSemana() {
	var diaSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
	return diaSemana[fecha.getDay()];
}

// Comprueba si el año es o no bisiesto.
function esBisiesto(anio) {
	if ((anio % 4 == 0) && ((anio % 100 != 0) || (anio % 400 == 0)))
		return "SI";
	return "NO";
}

// Devuelve el número mayor de un array de números.
function getMayor() {
	var numeros = [65, 22, 69, 99, 12];
	numeros.sort(function(a, b) {
		return b-a;
	});
	return numeros[0];
}

window.addEventListener("load", function() {
	crearContenido();
	window.opener.document.body.innerHTML = "<header><h1>Tarea del tema 3</h1></header>";
	document.body.innerHTML += "<span class=\"error\" id=\"msgErr\"></span>"
							+ "<form name=\"formulario\">"
							+ "<p>Introduzca su nombre y apellidos: <input type=\"text\" class=\"nombre\" id=\"nombreCompleto\"></p>"
							+ "<p>Introduzca DIA de nacimiento: <input type=\"text\" class=\"dia\" id=\"dia\"></p>"
							+ "<p>Introduzca MES de nacimiento: <input type=\"text\" class=\"mes\" id=\"mes\"></p>"
							+ "<p>Introduzca AÑO de nacimiento: <input type=\"text\" class=\"anio\" id=\"anio\"></p>"
							+ "<input type=\"button\" name=\"enviar\" value=\"Enviar\">"
							+ "</form>";
	document.formulario.enviar.addEventListener("click", function() {
		if (validar())
			mostrarResultado();
	});
});