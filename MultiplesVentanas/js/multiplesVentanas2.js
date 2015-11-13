/**
Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
Métodos a utilizar:
	a. miVentana = window.open('','','width=200,height=200');
	b. miVentana.document.open();
	c. miVentana.document.write();
		Añade el esqueleto básico: html, head, title, body, ul...
	d. miVentana.document.close();
*/

// Cierra una ventana.
function cerrarVentana() {
	window.close();
}

window.addEventListener("load", function() {
	document.getElementById("cerrar").addEventListener("click", cerrarVentana);
});