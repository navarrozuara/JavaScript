/**
Extender el objeto Array para que permita añadir nuevos elementos al final del array:
	var array1 = [0, 1, 2];
	array1.anadir(3);
	// array1 = [0, 1, 2, 3]
Incluir la opción de controlar si se permiten elementos duplicados o no.
*/

Array.prototype.anadir = function(elemento, permitirDuplicados) {
	var anadirElemento = true;

	if (permitirDuplicados == false) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] === elemento)
				anadirElemento = false;
		}
	}

	if (anadirElemento)
		this[this.length] = elemento;
}

window.addEventListener("load", function() {
	var array = [];
	array.anadir(0);
	array.anadir(1);
	array.anadir(2);
	array.anadir(2);
	array.anadir(2, false);
	array.anadir(3);
	document.getElementById("contenido").innerHTML = "<p><strong>Añadimos nuevos elementos al final del array: </strong></p>"+ 
													 "array.anadir(0);<br />array.anadir(1);<br />array.anadir(2);<br />"+
													 "array.anadir(2);<br />array.anadir(2, false);<br />array.anadir(3);<br />"+
													 "<p><strong>Array resultante: </strong></p>"+array;
});