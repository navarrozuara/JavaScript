/**
Crea un formulario con todos los tipos de controles y realiza todas las validaciones posibles mediante JavaScript. 
Utiliza el modelo de registro avanzado de eventos según W3C (addEventListener), así como las expresiones regulares. 
Asegúrate de validar lo siguiente:
	Obligatoriedad (campo de texto, opción seleccionada (checkbox, radio button y selección).
	Tipo de dato introducido (numérico...).
	Dirección de correo válida.
	Número de DNI válido.
	Fecha válida.
	Número de teléfono.
	Número de cuenta corriente.
	URL.
Asegúrate de que:
	1. Al perder el foco de cada control se comprueba su validación.
	2. Los errores los muestras mediante css.
	3. Al enviar el formulario se realizan TODAS LAS VALIDACIONES, yéndose el foco al primer error.
Procura aislar las validaciones del interfaz del usuario (arquitectura de tres capas).
*/

(function(){

	function validarTexto(elemento) {
		if (elemento == null || elemento.length == 0 || /^\s+$/.test(elemento))
			return false;
		return true;
	}

	function validarNum(elemento) {
		if (isNaN(elemento) || !(/\d/.test(elemento)))
			return false;
		return true;
	}

	function validarEmail(elemento) {
		if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(elemento)))
			return false;
		return true;
	}

	function validarDNI(elemento) {
		var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
		if (!(/^\d{8}[-]?[A-Z]$/.test(elemento)))
			return false;
		if (elemento.charAt(8) != letras[(elemento.substring(0, 8))%23])
			return false;
		return true;
	}

	function validarFecha(elemento) {
		if (!(/^\d{2}\/\d{2}\/\d{4}$/.test(elemento)))
			return false;
		var date = elemento.split("/");
		var fecha = new Date(date[2], date[1]-1, date[0]);
		if (fecha.getDate() == date[0])
			if (fecha.getMonth() == date[1]-1)
				if (fecha.getFullYear() == date[2])
					return true;
		return false;
	}

	function validarTelefono(elemento) {
		if (!(/^\d{3}[-\s]?\d{3}[-\s]?\d{3}$/.test(elemento)))
			return false;
		return true;
	}

	function validarCuentaCorriente(elemento) {
		if (!(/^\d{4}-\d{4}-\d{2}-\d{10}$/.test(elemento)))
			return false;
		return true;
	}

	function validarURL(elemento) {
		if (!(/^((ht|f)tp[s]?:\/\/)?\w+([\.\-\w]+)?\.([a-z]{2,3})(:\d{2,5})?(\/)?((\/).+)?$/.test(elemento)))
			return false;
		return true;
	}

	function validarRadio(elemento) {
		var seleccionado = false;
		for (var i = 0; i < elemento.length; i++) {
			if (elemento[i].checked) {
				seleccionado = true;
				break;
			}
		}
		if (!seleccionado)
			return false;
		return true;
	}

	function validarSelect(elemento) {
		var indice = elemento.selectedIndex;
		if (indice == null || indice == 0)
			return false;
		return true;
	}

	function validarCheck(elemento) {
		if (!elemento.checked)
			return false;
		return true;
	}

	window.addEventListener('load', function() {

		var texto = document.getElementById("texto");
		var numero = document.getElementById("numero");
		var correo = document.getElementById("correo");
		var dni = document.getElementById("dni");
		var fecha = document.getElementById("fecha");
		var telefono = document.getElementById("telefono");
		var cuenta = document.getElementById("cuenta");
		var url = document.getElementById("url");
		var radioBtn = document.getElementsByName("sexo");
		var lista = document.getElementById("opciones");
		var check = document.getElementById("publicidad");

		var textoErr = document.getElementById("textoErr");
		var numErr = document.getElementById("numErr");
		var correoErr = document.getElementById("correoErr");
		var dniErr = document.getElementById("dniErr");
		var fechaErr = document.getElementById("fechaErr");
		var telefonoErr = document.getElementById("telefonoErr");
		var cuentaErr = document.getElementById("cuentaErr");
		var urlErr = document.getElementById("urlErr");
		var radioErr = document.getElementById("radioErr");
		var selectErr = document.getElementById("selectErr");
		var checkErr = document.getElementById("checkErr");

		var mensajesError = ["Este campo es obligatorio.", "Debe introducir un número.", "Dirección de correo inválida.", 
		"El DNI introducido es inválido.", "La fecha introducida es inválida.", "Número de teléfono inválido.", 
		"Número de cuenta corriente inválido.", "La URL introducida es inválida.", "Debe seleccionar una de las opciones.", 
		"Debe aceptar el envío de publicidad para continuar."];

		var element = "";

		function validateElements(validate, elemento, elementoErr, msgError) {
			if (!validate) {
				elementoErr.innerHTML = msgError;
				elemento.setAttribute('class','error');
				element = elemento;
				return true;
			}
			elementoErr.innerHTML = "";
			elemento.setAttribute('class','correct');
			return false;
		}


		function obtenerFoco(elemento, checkElemento) {
			if (checkElemento)
				elemento.focus();
		}

		function validarFormulario() {
			var errorTexto,
				errorNumero,
				errorCorreo,
				errorDNI,
				errorFecha,
				errorTelefono,
				errorCuenta,
				errorURL,
				errorRadio,
				errorLista,
				errorCheck;

			errorCheck = validateElements(validarCheck(check), check, checkErr, mensajesError[9]);
			errorLista = validateElements(validarSelect(lista), lista, selectErr, mensajesError[8]);
			for (var i = 0; i < radioBtn.length; i++) {
				errorRadio = validateElements(validarRadio(radioBtn), radioBtn[i], radioErr, mensajesError[8]);
				if (errorRadio)
					break;
			}
			errorURL = validateElements(validarURL(url.value), url, urlErr, mensajesError[7]);
			errorCuenta = validateElements(validarCuentaCorriente(cuenta.value), cuenta, cuentaErr, mensajesError[6]);
			errorTelefono = validateElements(validarTelefono(telefono.value), telefono, telefonoErr, mensajesError[5]);
			errorFecha = validateElements(validarFecha(fecha.value), fecha, fechaErr, mensajesError[4]);
			errorDNI = validateElements(validarDNI(dni.value), dni, dniErr, mensajesError[3]);
			errorCorreo = validateElements(validarEmail(correo.value), correo, correoErr, mensajesError[2]);
			errorNumero = validateElements(validarNum(numero.value), numero, numErr, mensajesError[1]);
			errorTexto = validateElements(validarTexto(texto.value), texto, textoErr, mensajesError[0]);

			if (errorTexto || errorNumero || errorCorreo || errorDNI || errorFecha  || errorTelefono || errorCuenta 
				|| errorURL || errorRadio || errorLista || errorCheck) {
				element.focus();
				return false;
			}
		}

		texto.addEventListener('blur', function() {
			obtenerFoco(this, validateElements(validarTexto(this.value), this, textoErr, mensajesError[0]));
		});

		numero.addEventListener('blur', function() {
			obtenerFoco(this, validateElements(validarNum(this.value), this, numErr, mensajesError[1]));
		});

		correo.addEventListener('blur', function() {
			obtenerFoco(this, validateElements(validarEmail(this.value), this, correoErr, mensajesError[2]));
		});

		dni.addEventListener('blur', function() {
			obtenerFoco(this, validateElements(validarDNI(this.value), this, dniErr, mensajesError[3]));
		});

		fecha.addEventListener('blur', function() {
			obtenerFoco(this, validateElements(validarFecha(this.value), this, fechaErr, mensajesError[4]));
		});

		telefono.addEventListener('blur', function() {
			obtenerFoco(this, validateElements(validarTelefono(this.value), this, telefonoErr, mensajesError[5]));
		});

		cuenta.addEventListener('blur', function() {
			obtenerFoco(this, validateElements(validarCuentaCorriente(this.value), this, cuentaErr, mensajesError[6]));
		});

		url.addEventListener('blur', function() {
			obtenerFoco(this, validateElements(validarURL(this.value), this, urlErr, mensajesError[7]));
		});

		for (var i = 0; i < radioBtn.length; i++) {
			radioBtn[i].addEventListener('blur', function() {
				obtenerFoco(this, validateElements(validarRadio(radioBtn), this, radioErr, mensajesError[8]));
			});
		}

		lista.addEventListener('blur', function() {
			obtenerFoco(this, validateElements(validarSelect(this), this, selectErr, mensajesError[8]));
		});

		check.addEventListener('blur', function() {
			obtenerFoco(this, validateElements(validarCheck(this), this, checkErr, mensajesError[9]));
		});

		document.forms[0].onsubmit = validarFormulario;

	});

})();