/**
Fíjate en la página 10 de la presentación del tema. Es el árbol DOM de una página 
web concreta. Crea el documento HTML al que representa.
Indica el número de nodos que tiene.
*/

window.addEventListener('load', function() {
	console.log("Número de nodos que tiene: " 
		+ document.documentElement.childElementCount);
});