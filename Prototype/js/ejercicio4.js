/**
Añadir a la clase Array un método llamado sin() que permita filtrar los elementos del array original 
y obtenga un nuevo array con todos los valores diferentes al indicado:
	var array1 = [1, 2, 3, 4, 5];
	var filtrado = array1.sin(4);  // filtrado = [1, 2, 3, 5]
*/

Array.prototype.sin = function(elemento) {
	var filtrado = [];
	for (var i = 0; i < this.length; i++) {
		if (this[i] !== elemento)
			filtrado.push(this[i]);
	}
	return filtrado;
}

window.addEventListener("load", function() {
	var array = [1, 2, 3, 4, 5];
	var filtrado = array.sin(4);
	document.getElementById("contenido").innerHTML = "<p><strong>Array original: </strong></p>"+array+
													 "<p><strong>Array filtrado: </strong></p>"+filtrado;
});