(function() {

	var peticion_http;
	var arrEstados = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completo'];

	function cargaContenido(url, metodo, funcion) {
		peticion_http = new XMLHttpRequest();
		if (peticion_http) {
			peticion_http.onreadystatechange = funcion;
			peticion_http.open(metodo, url, true);
			peticion_http.send(null);
		}
	}

	function muestraContenido() {
		estados.innerHTML += peticion_http.readyState + ' --> ' + arrEstados[peticion_http.readyState] + '<br />';
		if (peticion_http.readyState == 4) {
			if(peticion_http.status == 200) {
				contenidos.innerHTML = peticion_http.responseText;
			}
			muestraCabeceras();
			muestraCodigoEstado();
		}
	}

	function muestraCabeceras() {
		cabeceras.innerHTML = peticion_http.getAllResponseHeaders();
	}

	function muestraCodigoEstado() {
		codigo.innerHTML = peticion_http.status + '<br />' + peticion_http.statusText;
	}

	window.addEventListener('load', function() {
		var recurso = document.getElementById('recurso'),
			contenidos = document.getElementById('contenidos'),
			estados = document.getElementById('estados'),
			cabeceras = document.getElementById('cabeceras'),
			codigo = document.getElementById('codigo'),
			limpiar = document.getElementById('limpiar'),
			mostrar = document.getElementById('enviar');
		recurso.value = location.href;
		mostrar.addEventListener('click', function() {
			cargaContenido(recurso.value, 'GET', muestraContenido);
		});
		limpiar.addEventListener('click', function() {
			contenidos.innerHTML = '';
			estados.innerHTML = '';
			cabeceras.innerHTML = '';
			codigo.innerHTML = '';
		});
	});

})();
