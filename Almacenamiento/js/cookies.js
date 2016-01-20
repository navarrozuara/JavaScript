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

	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) == 0) 
				return c.substring(name.length, c.length);
		}
		return "";
	}

	document.getElementById("crear").addEventListener('click', function() {
		setCookie("usuario", "Se ha creado la cookie usuario.", 20);
		document.getElementById("resultado").innerHTML = getCookie("usuario");
	});

	document.getElementById("eliminar").addEventListener('click', function() {
		setCookie("usuario", "Se ha creado la cookie usuario.", -2);
		document.getElementById("resultado").innerHTML = getCookie("usuario");
	});

});