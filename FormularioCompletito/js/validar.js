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
		var fecha = new Date(elemento.substring(6,10), elemento.substring(3,5)-1, elemento.substring(0,2));
		if (!(/^\d{2}\/\d{2}\/\d{4}$/.test(elemento)))
			return false;
		if (elemento.substring(0,2) != fecha.getDate())
			return false;
		return true;
	}

	function validarTelefono(elemento) {
		if (!(/^\d{9}$/.test(elemento)) || !(/^\d{3}[-\s]?\d{3}[-\s]?\d{3}$/.test(elemento)))
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

		function validacionTexto() {
			var texto = document.getElementById("texto");
			if (!validarTexto(texto.value)) {
				document.getElementById("textoErr").innerHTML = "Este campo es obligatorio.";
				texto.focus();
				texto.setAttribute('class','error');
				return false;
			}
			document.getElementById("textoErr").innerHTML = "";
			texto.setAttribute('class','correct');
			return true;
		}

		function validacionNum() {
			var numero = document.getElementById("numero");
			if (!validarNum(numero.value)) {
				document.getElementById("numErr").innerHTML = "Debe introducir un número.";
				numero.focus();
				numero.setAttribute('class','error');
				return false;
			}
			document.getElementById("numErr").innerHTML = "";
			numero.setAttribute('class','correct');
			return true;
		}

		function validacionEmail() {
			var correo = document.getElementById("correo");
			if (!validarEmail(correo.value)) {
				document.getElementById("correoErr").innerHTML = "Dirección de correo inválida.";
				correo.focus();
				correo.setAttribute('class','error');
				return false;
			}
			document.getElementById("correoErr").innerHTML = "";
			correo.setAttribute('class','correct');
			return true;
		}

		function validacionDNI() {
			var dni = document.getElementById("dni");
			if (!validarDNI(dni.value)) {
				document.getElementById("dniErr").innerHTML = "El DNI introducido es inválido.";
				dni.focus();
				dni.setAttribute('class','error');
				return false;
			}
			document.getElementById("dniErr").innerHTML = "";
			dni.setAttribute('class','correct');
			return true;
		}

		function validacionFecha() {
			var fecha = document.getElementById("fecha");
			if (!validarFecha(fecha.value)) {
				document.getElementById("fechaErr").innerHTML = "La fecha introducida es inválida.";
				fecha.focus();
				fecha.setAttribute('class','error');
				return false;
			}
			document.getElementById("fechaErr").innerHTML = "";
			fecha.setAttribute('class','correct');
			return true;
		}

		function validacionTelefono() {
			var telefono = document.getElementById("telefono");
			if (!validarTelefono(telefono.value)) {
				document.getElementById("telefonoErr").innerHTML = "Número de teléfono inválido.";
				telefono.focus();
				telefono.setAttribute('class','error');
				return false;
			}
			document.getElementById("telefonoErr").innerHTML = "";
			telefono.setAttribute('class','correct');
			return true;
		}

		function validacionCuentaCorriente() {
			var cuenta = document.getElementById("cuenta");
			if (!validarCuentaCorriente(cuenta.value)) {
				document.getElementById("cuentaErr").innerHTML = "Número de cuenta corriente inválido.";
				cuenta.focus();
				cuenta.setAttribute('class','error');
				return false;
			}
			document.getElementById("cuentaErr").innerHTML = "";
			cuenta.setAttribute('class','correct');
			return true;
		}

		function validacionURL() {
			var url = document.getElementById("url");
			if (!validarURL(url.value)) {
				document.getElementById("urlErr").innerHTML = "La URL introducida es inválida.";
				url.focus();
				url.setAttribute('class','error');
				return false;
			}
			document.getElementById("urlErr").innerHTML = "";
			url.setAttribute('class','correct');
			return true;
		}

		function validacionRadio() {
			var radio = document.getElementsByName("sexo");
			if (!validarRadio(radio)) {
				document.getElementById("sexoErr").innerHTML = "Debe seleccionar una de las opciones.";
				radio[0].focus();
				return false;
			}
			document.getElementById("sexoErr").innerHTML = "";
			return true;
		}

		function validacionSelect() {
			var select = document.getElementById("opciones");
			if (!validarSelect(select)) {
				document.getElementById("selectErr").innerHTML = "Debe seleccionar una de las opciones.";
				select.focus();
				return false;
			}
			document.getElementById("selectErr").innerHTML = "";
			return true;
		}

		function validacionCheck() {
			var check = document.getElementById("publicidad");
			if (!validarCheck(check)) {
				document.getElementById("publicidadErr").innerHTML = "Debe aceptar el envío de publicidad para continuar.";
				check.focus();
				return false;
			}
			document.getElementById("publicidadErr").innerHTML = "";
			return true;
		}

		function validarFormulario() {
			var validaciones = [];
			validaciones.push(validacionTexto());
			validaciones.push(validacionNum());
			validaciones.push(validacionEmail());
			validaciones.push(validacionDNI());
			validaciones.push(validacionFecha());
			validaciones.push(validacionTelefono());
			validaciones.push(validacionCuentaCorriente());
			validaciones.push(validacionURL());
			validaciones.push(validacionRadio());
			validaciones.push(validacionSelect());
			validaciones.push(validacionCheck());

			var validado = true;

			for (var i = 0; i < validaciones.length; i++) {
				if (!validaciones[i]) {
					validado = false;
					break;
				}
			}

			if (!validado)
				return false;
			return true;
		}

		document.getElementById("texto").addEventListener('blur', validacionTexto, false);
		document.getElementById("numero").addEventListener('blur', validacionNum, false);
		document.getElementById("correo").addEventListener('blur', validacionEmail, false);
		document.getElementById("dni").addEventListener('blur', validacionDNI, false);
		document.getElementById("fecha").addEventListener('blur', validacionFecha, false);
		document.getElementById("telefono").addEventListener('blur', validacionTelefono, false);
		document.getElementById("cuenta").addEventListener('blur', validacionCuentaCorriente, false);
		document.getElementById("url").addEventListener('blur', validacionURL, false);
		for (var i = 0; i < document.getElementsByName("sexo").length; i++)
			document.getElementsByName("sexo")[i].addEventListener('blur', validacionRadio, false);
		document.getElementById("opciones").addEventListener('blur', validacionSelect, false);
		document.getElementById("publicidad").addEventListener('blur', validacionCheck, false);
		document.forms[0].onsubmit = validarFormulario;
	});

})();