/**
Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana 
ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
Métodos a utilizar:
	a. window.open()
	b. document.write()
Añade el esqueleto básico: html, head, title, body, ul...
*/

// Crea el contenido de la ventana hija.
function crearContenido() {
	document.body.innerHTML = "<p>Se han utilizado las propiedades:</p>"
							+ "<ul>" 
							+ "<li>height=" + window.innerHeight + "</li>"
							+ "<li>width=" + window.innerWidth + "</li>"
							+ "</ul>";
}

window.addEventListener("load", crearContenido);