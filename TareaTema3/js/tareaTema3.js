/*
1. Abra una nueva ventana.
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

var nuevaVentana;

function abrirVentana() {
	nuevaVentana = window.open("", "Nueva ventana", "width=800,height=550,resizable=no");
	nuevaVentana.document.open();
	nuevaVentana.document.write("\
		<!DOCTYPE html>\
		<html lang=\"en\">\
		<head>\
			<meta charset=\"UTF-8\">\
			<title>Elisa Navarro Zuara</title>\
			<link rel=\"stylesheet\" type=\"text/css\" href=\"css/estilos.css\">\
			<script type=\"text/javascript\" src=\"js/hijoTema3.js\"></script>\
		</head>\
		<body>\
		</body>\
		</html>");
	nuevaVentana.document.close();
}

window.addEventListener("load", function() {
	abrirVentana();
});