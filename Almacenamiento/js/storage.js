/**
Estudia las distintas formas de almacenamiento en el lado del cliente 
(cookies, sessionStorage, localStorage...).
Entrega una página donde se documenten los métodos (lectura, escritura...), 
pros y contras. 
Enlaza cada una de las distintas formas de almacenamiento con un ejemplo 
(por ejemplo, que guarde/recupere la configuración de un usuario, 
como puede ser el login, el color de fondo...).
*/

window.addEventListener('load', function() {

	if (localStorage.getItem("usuarioLocal") != null)
		document.getElementById("resultadoLocal").innerHTML = localStorage.getItem("usuarioLocal");

	document.getElementById("crearLocal").addEventListener('click', function() {
		localStorage.setItem("usuarioLocal", "Se ha creado un objeto Storage usuarioLocal.");
		document.getElementById("resultadoLocal").innerHTML = localStorage.getItem("usuarioLocal");
	});

	document.getElementById("eliminarLocal").addEventListener('click', function() {
		localStorage.removeItem("usuarioLocal");
		document.getElementById("resultadoLocal").innerHTML = localStorage.getItem("usuarioLocal");
	});

});