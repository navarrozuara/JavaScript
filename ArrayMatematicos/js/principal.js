/**
Mediante prototype, agrega los métodos sumar, restar, trasponer y multiplicar 
a la clase ArraysMatematicos. 
Recuerda que el estado de un array deberían de ser los elementos.
Recuerda las restricciones y posibilidades de un Array:
	1. Sobre las dimensines de los arrays implicados (unidimensional, bidimensional...).
	2. Sobre las longitudes de los arrays implicados (1 en adelante).
	3. Sobre los contenidos de los arrays implicados (numéricos).
	4. Podemos rellenar un Array con valores aleatorios o directamente desde teclado.
Una vez creada la clase, demuestra su funcionamiento en una página bien diseñada. 
Evita las cajas de texto y hazla lo más dinámica posible.
*/

var misGlobales = {
	m1: undefined,
	m2: undefined
}

function inicio() {
	var resultado;
	var filas1, columnas1, filas2, columnas2;
	var msgErr = document.getElementById("msgErr");
	var matriz1 = document.getElementById("matriz1");
	var matriz2 = document.getElementById("matriz2");
	var msgResultado = document.getElementById("resultado");

	function validarDatos(dato) {
		if (isNaN(dato)) {
			msgErr.innerHTML = "Debe introducir números.";
			return false;
		} else if (dato < 1) {
			msgErr.innerHTML = "El número de filas y columnas ha de ser mayor de 0.";
			return false;
		} else if (dato % 1 != 0) {
			msgErr.innerHTML = "No se permiten números decimales.";
			return false;
		}
		msgErr.innerHTML = "";
		return true;
	}

	function generarMatrices() {
		filas1 = document.getElementById("filas1").value;
		columnas1 = document.getElementById("columnas1").value;
		filas2 = document.getElementById("filas2").value;
		columnas2 = document.getElementById("columnas2").value;

		if (validarDatos(filas1) && validarDatos(columnas1) && validarDatos(filas2) && validarDatos(columnas2)) {
			try {
				misGlobales.m1 = new ArrayMatematicos(filas1, columnas1);
				misGlobales.m2 = new ArrayMatematicos(filas2, columnas2);
				matriz1.innerHTML = "MATRIZ 1:<br />" + misGlobales.m1.mostrar();
				matriz2.innerHTML = "MATRIZ 2:<br />" + misGlobales.m2.mostrar();
			} catch (e) {
				msgErr.innerHTML = e.message;
			}
		}
	}

	function sumarMatrices() {
		if (misGlobales.m1 === undefined || misGlobales.m2 === undefined) {
			msgErr.innerHTML = "Antes de realizar la suma tienes que crear las matrices.";
			return;
		}
		msgErr.innerHTML = "";
		try {
			resultado = misGlobales.m1.sumar(misGlobales.m2);
			msgResultado.innerHTML = "SUMA:<br />" + resultado.mostrar();
		} catch (e) {
			msgErr.innerHTML = e.message;
			msgResultado.innerHTML = "";
		}
	}

	function restarMatrices() {
		if (misGlobales.m1 === undefined || misGlobales.m2 === undefined) {
			msgErr.innerHTML = "Antes de realizar la resta tienes que crear las matrices.";
			return;
		}
		msgErr.innerHTML = "";
		try {
			resultado = misGlobales.m1.restar(misGlobales.m2);
			msgResultado.innerHTML = "RESTA:<br />" + resultado.mostrar();
		} catch (e) {
			msgErr.innerHTML = e.message;
			msgResultado.innerHTML = "";
		}
	}

	function multiplicarMatrices() {
		if (misGlobales.m1 === undefined || misGlobales.m2 === undefined) {
			msgErr.innerHTML = "Antes de realizar la multiplicacion tienes que crear las matrices.";
			return;
		}
		msgErr.innerHTML = "";
		try {
			resultado = misGlobales.m1.multiplicar(misGlobales.m2);
			msgResultado.innerHTML = "PRODUCTO:<br />" + resultado.mostrar();
		} catch (e) {
			msgErr.innerHTML = e.message;
			msgResultado.innerHTML = "";
		}
	}

	function trasponerMatrices() {
		if (misGlobales.m1 === undefined || misGlobales.m2 === undefined) {
			msgErr.innerHTML = "Antes de realizar la traspuesta tienes que crear las matrices.";
			return;
		}
		msgErr.innerHTML = "";
		misGlobales.m1.trasponer();
		misGlobales.m2.trasponer();
		msgResultado.innerHTML = "TRASPUESTA MATRIZ 1:<br />" + misGlobales.m1.mostrar() +
		"<br />TRASPUESTA MATRIZ 2:<br />" + misGlobales.m2.mostrar();
	}

	function limpiarMatrices() {
		misGlobales.m1 = undefined;
		misGlobales.m2 = undefined;
		resultado = "";
		matriz1.innerHTML = "";
		matriz2.innerHTML = "";
		msgResultado.innerHTML = "";
	}

	document.getElementById("generar").addEventListener("click", generarMatrices);
	document.getElementById("sumar").addEventListener("click", sumarMatrices);
	document.getElementById("restar").addEventListener("click", restarMatrices);
	document.getElementById("multiplicar").addEventListener("click", multiplicarMatrices);
	document.getElementById("trasponer").addEventListener("click", trasponerMatrices);
	document.getElementById("clear").addEventListener("click", limpiarMatrices);
}

window.addEventListener("load", inicio);