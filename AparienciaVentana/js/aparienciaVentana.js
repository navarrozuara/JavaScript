/**
Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana 
ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
Métodos a utilizar:
	a. window.open()
	b. document.write()
Añade el esqueleto básico: html, head, title, body, ul...
*/

function abrirVentana() {
	var nuevaVentana = window.open("", "Nueva ventana", "width=300,height=200,top=0,left=0");
	nuevaVentana.document.open();
	nuevaVentana.document.write("\
		<!DOCTYPE html>\
		<html lang=\"en\">\
		<head>\
			<meta charset=\"UTF-8\">\
			<title>Elisa Navarro Zuara</title>\
			<script type=\"text/javascript\" src=\"js/aparienciaVentana2.js\"></script>\
		</head>\
		<body>\
		</body>\
		</html>");
	nuevaVentana.document.close();
}

window.addEventListener("load", function() {
	document.getElementById("enviar").addEventListener("click", abrirVentana);
});