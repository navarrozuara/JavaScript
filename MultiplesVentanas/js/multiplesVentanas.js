/**
Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
Métodos a utilizar:
	a. miVentana = window.open('','','width=200,height=200');
	b. miVentana.document.open();
	c. miVentana.document.write();
		Añade el esqueleto básico: html, head, title, body, ul...
	d. miVentana.document.close();
*/

function abrirMultiplesVentanas() {
	var miVentana;
	for (var i = 0; i < 5; i++) {
		miVentana = window.open("", "", "width=200,height=200,top="+(i*15)+",left="+(i*15)+"");
		miVentana.document.open();
		miVentana.document.write("\
			<!DOCTYPE html>\
			<html lang=\"en\">\
			<head>\
				<meta charset=\"UTF-8\">\
				<title>Ventana "+(i+1)+"</title>\
				<script type=\"text/javascript\" src=\"js/multiplesVentanas2.js\"></script>\
			</head>\
			<body>\
				<p>Ventana "+(i+1)+"</p>\
				<input type=\"button\" id=\"cerrar\" value=\"Cerrar\" />\
			</body>\
			</html>");
		miVentana.document.close();
	}
}

window.addEventListener("load", function() {
	document.getElementById("enviar").addEventListener("click", abrirMultiplesVentanas);
});