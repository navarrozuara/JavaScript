/**
Fíjate en la página 19 de la presentación del tema. Representa el árbol DOM del 
documento. Realiza las siguientes acciones:
	1. Accede al elemento html.
	2. Accede al body mediante lastChild.
	3. Accede al head mediante la lista childNodes.
	4. Averigua el número de hijos de body.
	5. Añádele un párrafo con el texto "Hola a todos".
	6. Añádele al principio del body una lista (<ol>) con los nombres 
	   de la pareja a la que perteneces.
	7. Elimina el último párrafo del documento original ("Parrafo DOM tres").
*/

window.addEventListener('load', function() {
	//Acceso al elemento html
	var html = document.documentElement;
	//Acceso al body mediante lastChild
	var body = html.lastChild;
	//Acceso al head mediante childNodes
	html.childNodes[0];
	//Número de hijos de body
	console.log("Número de hijos de body: " + body.childElementCount);
	//Añadir un párrafo
	var parrafo = document.createElement("p");
	var texto = document.createTextNode("Hola a todos");
	parrafo.appendChild(texto);
	body.appendChild(parrafo);
	//Añadir al principio del body una lista
	var lista = document.createElement("ol");
	var elemento1 = document.createElement("li");
	var elemento2 = document.createElement("li");
	elemento1.appendChild(document.createTextNode("Elisa"));
	elemento2.appendChild(document.createTextNode("Ulises"));
	lista.appendChild(elemento1);
	lista.appendChild(elemento2);
	body.insertBefore(lista, document.body.firstChild);
	//Eliminar el último párrafo del documento original
	body.removeChild(body.childNodes[body.childNodes.length - 3]);
});