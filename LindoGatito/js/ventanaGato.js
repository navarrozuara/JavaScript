/**
Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el usuario.
Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un peso (1-15). 
Cada vez que crees un objeto gato aparecerá una ventana nueva con una imagen que 
cambiará en función de su estado (comiendo, durmiendo y jugando, que es su estado habitual). 
El usuario podrá averiguar la edad del gato partiendo de un evento.
	1. Evita las cajas de texto.
	2. No puedes usar ni alert ni prompt.
	3. Hazlo lo más dinámico posible.
	4. Utiliza prototype para los métodos.
*/

function inicio() {

	var gato = opener.misGlobales.gato;

	function jugar() {
		try {
			gato.jugar();
		} catch (e) {
			document.getElementById("estado").innerHTML = e.message;
		}
	}

	function comer() {
		try {
			gato.comer();
		} catch (e) {
			document.getElementById("estado").innerHTML = e.message;
		}
	}

	function actualizarDatos() {
		document.getElementById("peso").innerHTML = '<p><strong>Peso: </strong>' + gato.peso + 'kg.</p>';
		document.getElementById("aspecto").src = gato.aspecto;
		switch (gato.estado) {
			case 'Jugando':
				document.getElementById("estado").innerHTML = '<p>' + gato.nombre + ' está jugando con su ovillo de lana.';
				break;
			case 'Comiendo':
				document.getElementById("estado").innerHTML = '<p>' + gato.nombre + ' está comiendo un manjar.';
				break;
			case 'Durmiendo':
				document.getElementById("estado").innerHTML = '<p>' + gato.nombre + ' está durmiendo y soñando con ratoncitos.';
				break;
			case 'Muerto':
				document.getElementById("jugar").disabled = true;
				document.getElementById("comer").disabled = true;
				document.getElementById("dormir").disabled = true;
				document.getElementById("mostrarEdad").disabled = true;
				break;
		}
	}

	document.getElementById("jugar").addEventListener("click", function() {
		jugar();
		actualizarDatos();
	});

	document.getElementById("comer").addEventListener("click", function() {
		comer();
		actualizarDatos();
	});

	document.getElementById("dormir").addEventListener("click", function() {
		gato.dormir();
		actualizarDatos();
	});

	document.getElementById("mostrarEdad").addEventListener("click", function() {
		document.getElementById("edad").innerHTML = gato.mostrarEdad();
	});
}

window.addEventListener("load", inicio);