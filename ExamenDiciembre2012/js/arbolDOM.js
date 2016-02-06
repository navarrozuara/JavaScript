/**
Dinámicamente, realiza las siguientes operaciones en el orden indicado:
	1. Borra el nodo del párrafo "bórrame".
	2. Inserta delante de "Apellido del autor" tu nombre dentro de un párrafo.
	3. Añade detrás de "Apellido del autor" tu apellido dentro de un párrafo.
*/

window.addEventListener('load', function() {
	var p, texto;

	document.body.children[0].remove();

	p = document.createElement("p");
	texto = document.createTextNode("Elisa");
	p.appendChild(texto);
	document.body.insertBefore(p, document.body.lastElementChild);

	p = document.createElement("p");
	texto = document.createTextNode("Navarro");
	p.appendChild(texto);
	document.body.appendChild(p);
});