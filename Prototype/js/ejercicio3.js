/**
Extender la clase String para que permita truncar una cadena de texto a un tamaño indicado como parámetro:
	var cadena = "hola mundo";
	cadena2 = cadena.truncar(6); // cadena2 = "hola m"
Modificar la función anterior para que permita definir el texto que indica que la cadena se ha truncado:
	var cadena = "hola mundo";
	cadena2 = cadena.truncar(6, '...'); // cadena2 = "hol..."
*/

String.prototype.truncar = function(longitud, texto) {
	longitud = longitud || 8;

	if (this.length > longitud) {
		if (texto === undefined)
			return this.substring(0, longitud);
		else
			return this.substring(0, longitud-texto.length) + texto;
	} else 
		return this;
}

window.addEventListener("load", function() {
	var cadena = "hola mundo";
	document.getElementById("contenido").innerHTML = "<p><strong>Resultado: </strong></p>"+
													 "<p>cadena = \""+cadena+"\"<br />"+
													 "cadena.truncar(6) = \""+cadena.truncar(6)+"\"<br />"+
													 "cadena.truncar(6, '...') = \""+cadena.truncar(6, '...')+"\"</p>";
});