/**
Mediante el registro de eventos recomendado por la W3C, entrega una página donde muestres información 
referente a todos los eventos del Ratón.
Puede serte útil la siguiente páginas de librosWeb: introducción a JavaScript e introduccción a Ajax.
Recuerda comprobarlo en los tres navegadores principales.
*/

window.addEventListener('load', function() {

	function muestraInformacion(elEvento) {
		var evento = elEvento;
		var coordenadaX, coordenadaY;
		switch(evento.type) {
			case 'click':
				coordenadaX = evento.clientX;
				coordenadaY = evento.clientY;
				document.getElementById("click").innerHTML = coordenadaX + ", " + coordenadaY;
				break;
			case 'dblclick':
				coordenadaX = evento.clientX;
				coordenadaY = evento.clientY;
				document.getElementById("dblclick").innerHTML = coordenadaX + ", " + coordenadaY;
				break;
			case 'mousedown':
				document.getElementById("mousedown").innerHTML = "Se produce cuando se pulsa cualquier botón del ratón.";
				break;
			case 'mouseout':
				this.style.background = 'Gainsboro';
				document.getElementById("mouseover").innerHTML = "Se produce cuando el usuario mueve el puntero a un lugar fuera del elemento.";
				break;
			case 'mouseover':
				this.style.background = '#CEECF5'
				document.getElementById("mouseover").innerHTML = "Se produce cuando el usuario mueve el puntero hacia un lugar en el interior del elemento.";
				break;
			case 'mouseup':
				document.getElementById("mouseup").innerHTML = "Se produce cuando se suelta cualquier botón del ratón que haya sido pulsado.";
				break;
			case 'mousemove':
				document.getElementById("mousemove").innerHTML = "Se produce (de forma continua) cuando el puntero del ratón se encuentra sobre un elemento.";
				break;
		}
	}

	document.addEventListener('click', muestraInformacion);
	document.addEventListener('dblclick', muestraInformacion);
	document.addEventListener('mousedown', muestraInformacion);
	document.getElementById("mouseover").addEventListener('mouseout', muestraInformacion);
	document.getElementById("mouseover").addEventListener('mouseover', muestraInformacion);
	document.addEventListener('mouseup', muestraInformacion);
	document.addEventListener('mousemove', muestraInformacion);
	
});