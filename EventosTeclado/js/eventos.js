/**
Mediante el registro de eventos recomendado por la W3C, entrega una página donde muestres información 
referente a todos los eventos del Teclado.
Puede serte útil la siguiente páginas de librosWeb: introducción a JavaScript e introduccción a Ajax.
Recuerda comprobarlo en los tres navegadores principales.
*/

window.addEventListener('load', function() {

	function muestraInformacion(elEvento) {
		var evento = elEvento;
		switch(evento.type) {
			case 'keydown':
				document.getElementById("keyDown").innerHTML = evento.keyCode;
				document.getElementById("charDown").innerHTML = evento.charCode;
				document.getElementById("caracterDown").innerHTML = manejador(elEvento) + comprobarCaracteres(elEvento);
				break;
			case 'keypress':
				document.getElementById("keyPress").innerHTML = evento.keyCode;
				document.getElementById("charPress").innerHTML = evento.charCode;
				document.getElementById("caracterPress").innerHTML = manejador(elEvento) + comprobarCaracteres(elEvento);
				break;
			case 'keyup':
				document.getElementById("keyUp").innerHTML = evento.keyCode;
				document.getElementById("charUp").innerHTML = evento.charCode;
				document.getElementById("caracterUp").innerHTML = manejador(elEvento) + comprobarCaracteres(elEvento);
				break;
		}
	}

	function manejador(elEvento) {
		var evento = elEvento;
		var caracter = evento.charCode || evento.keyCode;
		return String.fromCharCode(caracter);
	}

	function comprobarCaracteres(evento) {
		var msg = "";
		if (evento.altKey)
			msg += "Has pulsado la tecla Alt";
		if (evento.ctrlKey)
			msg += "Has pulsado la tecla Ctrl";
		if (evento.shiftKey)
			msg += "Has pulsado la tecla Shift";
		return msg;
	}

	document.addEventListener('keydown', muestraInformacion);
	document.addEventListener('keypress', muestraInformacion);
	document.addEventListener('keyup', muestraInformacion);
	
});