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

function ArrayMatematicos(filas, columnas) {
	this.filas = filas;
	this.columnas = columnas;
	this.contenido = this.inicializarArray();
}

ArrayMatematicos.prototype.inicializarArray = function() {
	var matriz = new Array();
	for (var i = 0; i < this.filas; i++) {
		matriz[i] = new Array();
		for (var j = 0; j < this.columnas; j++)
			matriz[i][j] = Math.round(Math.random()*11);
	}
	return matriz;
}

ArrayMatematicos.prototype.mostrar = function() {
	var cadena = "";
	for (var i = 0; i < this.filas; i++) {
		for (var j = 0; j < this.columnas; j++) {
			cadena += this.contenido[i][j] + "	";
		}
		cadena += "<br />";
	}
	return cadena;
}

ArrayMatematicos.prototype.comprobarDimensiones = function(matriz) {
	if (this.filas === matriz.filas && this.columnas === matriz.columnas)
		return true;
	return false;
}

ArrayMatematicos.prototype.comprobarDimensionesM = function(matriz) {
	if (this.columnas === matriz.filas)
		return true;
	return false;
}

ArrayMatematicos.prototype.sumar = function(matriz2) {
	var resultado;
	if (!this.comprobarDimensiones(matriz2)) {
		throw new ExceptionDimensiones("Las dimensiones introducidas no son válidas. Las filas y las columnas de ambas matrices han de ser iguales.");
	}
	resultado = new ArrayMatematicos(this.filas, this.columnas);
	for (var i = 0; i < this.filas; i++)
		for (var j = 0; j < this.columnas; j++)
			resultado.contenido[i][j] = this.contenido[i][j] + matriz2.contenido[i][j];
	return resultado;
}

ArrayMatematicos.prototype.restar = function(matriz2) {
	var resultado;
	if (!this.comprobarDimensiones(matriz2)) {
		throw new ExceptionDimensiones("Las dimensiones introducidas no son válidas. Las filas y las columnas de ambas matrices han de ser iguales.");
	}
	resultado = new ArrayMatematicos(this.filas, this.columnas);
	for (var i = 0; i < this.filas; i++)
		for (var j = 0; j < this.columnas; j++)
			resultado.contenido[i][j] = this.contenido[i][j] - matriz2.contenido[i][j];
	return resultado;
}

ArrayMatematicos.prototype.multiplicar = function(matriz2) {
	var resultado;
	if (!this.comprobarDimensionesM(matriz2)) {
		throw new ExceptionDimensiones("Las dimensiones introducidas no son válidas. Las columnas de la matriz1 han de coincidir con las filas de la matriz2.");
	}
	resultado = new ArrayMatematicos(this.filas, matriz2.columnas);
	for (var i = 0; i < this.filas; i++) {
		for (var j = 0; j < matriz2.columnas; j++) {
			resultado.contenido[i][j] = 0;
			for (var k = 0; k < this.columnas; k++) {
				resultado.contenido[i][j] += this.contenido[i][k] * matriz2.contenido[k][j];
			}
		}
	}
	return resultado;
}

ArrayMatematicos.prototype.trasponer = function() {
	var traspuesta = new ArrayMatematicos(this.columnas, this.filas);
	for (var i = 0; i < this.columnas; i++)
		for (var j = 0; j < this.filas; j++)
			traspuesta.contenido[i][j] = this.contenido[j][i];
	return traspuesta;
}

function ExceptionDimensiones(mensaje) { 
	this.mensaje = mensaje; 
	this.nombre = "ExceptionDimensiones";
}