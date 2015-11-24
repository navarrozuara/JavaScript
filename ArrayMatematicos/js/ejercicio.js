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

function sumarMatrices() {
	var m1, m2, resultado;
	var filas1 = document.getElementById("filas1").value.trim();
	var columnas1 = document.getElementById("columnas1").value.trim();
	var filas2 = document.getElementById("filas2").value.trim();
	var columnas2 = document.getElementById("columnas2").value.trim();
	var msgErr = document.getElementById("msgErr");

	try {
		m1 = new ArrayMatematicos(filas1, columnas1);
		m2 = new ArrayMatematicos(filas2, columnas2);
		resultado = m1.sumar(m2);
		document.getElementById("matriz1").innerHTML = "MATRIZ 1:<br />" + m1.mostrar();
		document.getElementById("matriz2").innerHTML = "MATRIZ 2:<br />" + m2.mostrar();
		document.getElementById("resultado").innerHTML = "SUMA:<br />" + resultado.mostrar();
		msgErr.innerHTML = "";
	} catch (exception) {
		msgErr.innerHTML = exception.mensaje;
	}
}

function restarMatrices() {
	var m1, m2, resultado;
	var filas1 = document.getElementById("filas1").value.trim();
	var columnas1 = document.getElementById("columnas1").value.trim();
	var filas2 = document.getElementById("filas2").value.trim();
	var columnas2 = document.getElementById("columnas2").value.trim();
	var msgErr = document.getElementById("msgErr");

	try {
		m1 = new ArrayMatematicos(filas1, columnas1);
		m2 = new ArrayMatematicos(filas2, columnas2);
		resultado = m1.restar(m2);
		document.getElementById("matriz1").innerHTML = "MATRIZ 1:<br />" + m1.mostrar();
		document.getElementById("matriz2").innerHTML = "MATRIZ 2:<br />" + m2.mostrar();
		document.getElementById("resultado").innerHTML = "RESTA:<br />" + resultado.mostrar();
		msgErr.innerHTML = "";
	} catch (exception) {
		msgErr.innerHTML = exception.mensaje;
	}
}

function multiplicarMatrices() {
	var m1, m2, resultado;
	var filas1 = document.getElementById("filas1").value.trim();
	var columnas1 = document.getElementById("columnas1").value.trim();
	var filas2 = document.getElementById("filas2").value.trim();
	var columnas2 = document.getElementById("columnas2").value.trim();
	var msgErr = document.getElementById("msgErr");

	try {
		m1 = new ArrayMatematicos(filas1, columnas1);
		m2 = new ArrayMatematicos(filas2, columnas2);
		resultado = m1.multiplicar(m2);
		document.getElementById("matriz1").innerHTML = "MATRIZ 1:<br />" + m1.mostrar();
		document.getElementById("matriz2").innerHTML = "MATRIZ 2:<br />" + m2.mostrar();
		document.getElementById("resultado").innerHTML = "PRODUCTO:<br />" + resultado.mostrar();
		msgErr.innerHTML = "";
	} catch (exception) {
		msgErr.innerHTML = exception.mensaje;
	}
}

function trasponerMatrices() {
	var m1, m2, traspuesta1, traspuesta2;
	var filas1 = document.getElementById("filas1").value.trim();
	var columnas1 = document.getElementById("columnas1").value.trim();
	var filas2 = document.getElementById("filas2").value.trim();
	var columnas2 = document.getElementById("columnas2").value.trim();
	var msgErr = document.getElementById("msgErr");

	m1 = new ArrayMatematicos(filas1, columnas1);
	m2 = new ArrayMatematicos(filas2, columnas2);
	traspuesta1 = m1.trasponer();
	traspuesta2 = m2.trasponer();
	document.getElementById("matriz1").innerHTML = "MATRIZ 1:<br />" + m1.mostrar();
	document.getElementById("matriz2").innerHTML = "MATRIZ 2:<br />" + m2.mostrar();
	document.getElementById("resultado").innerHTML = "TRASPUESTA MATRIZ 1:<br />" + traspuesta1.mostrar() +
	"<br />TRASPUESTA MATRIZ 2:<br />" + traspuesta2.mostrar();
}

window.addEventListener("load", function() {
	document.getElementById("sumar").addEventListener("click", sumarMatrices);
	document.getElementById("restar").addEventListener("click", restarMatrices);
	document.getElementById("multiplicar").addEventListener("click", multiplicarMatrices);
	document.getElementById("trasponer").addEventListener("click", trasponerMatrices);
});