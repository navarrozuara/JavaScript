function Usuario(nombre, apellidos, dni, sexo) {
	this.nombre = nombre;
	this.apellidos = apellidos;
	this.dni = dni;
	this.sexo = sexo;
}

Usuario.prototype.mostrar = function() {
	var div = document.getElementById("mensaje");
	div.innerHTML = "<p>Nombre: " + this.nombre + ", " 
					+ "Apellidos: " + this.apellidos + ", "
					+ "Sexo: " + this.sexo + "</p>";
}

Usuario.prototype.crearListItem = function() {
	var lista = document.getElementById("lista"); 
	var li = document.createElement("li");
	
	li.appendChild(document.createTextNode(this.nombre+", "+this.apellidos+", "+this.dni+", "+this.sexo));

	lista.appendChild(li);
}

window.addEventListener('load', function() {
	var usuario,
		sexoSeleccionado,
		nombre = document.getElementById("nombre"),
		apellidos = document.getElementById("apellidos"),
		dni = document.getElementById("dni"),
		sexo = document.getElementsByName("sexo"),
		acepto = document.getElementById("acepto"),
		msgNombre = document.getElementById("msgNombre"),
		msgApellidos = document.getElementById("msgApellidos"),
		msgDni = document.getElementById("msgDni"),
		msgSexo = document.getElementById("msgSexo"),
		msgCheck = document.getElementById("msgCheck"),
		div = document.getElementById("mensaje");

	function campoObligatorio(value) {
		if (value.trim() === "")
			return true;
		return false;
	}

	function validarNombre(value) {
		return /^[\wÁÉÍÓÚÑáéíóúñ\-\_]{4,}$/.test(value);
	}

	function validarDni(value) {
		return /^[0-9]{8}[a-zA-Z]$/.test(value);
	}

	function validarCheck(elemento) {
		if (!elemento.checked)
			return false;
		return true;
	}

	function validarSexo() {
		for (var i = 0; i < sexo.length; i++) {
			sexoSeleccionado = sexo[i].value;
			if (sexo[i].checked)
				return true;
		}
		return false;
	}

	function validacionNombre() {
		if (campoObligatorio(nombre.value)) {
			msgNombre.innerHTML = "Campo vacío";
			return false;
		}
		if (!validarNombre(nombre.value)) {
			msgNombre.innerHTML = "Requiere un mínimo de 4 números o letras (mayúsculas o minúsculas), guiones o subrayados.";
			return false;
		}
		msgNombre.innerHTML = "";
		return true;
	}

	function validacionApellidos() {
		if (campoObligatorio(apellidos.value)) {
			msgApellidos.innerHTML = "Campo vacío";
			return false;
		}
		msgApellidos.innerHTML = "";
		return true;
	}

	function validacionDni() {
		if (campoObligatorio(dni.value)) {
			msgDni.innerHTML = "Campo vacío";
			return false;
		}
		if (!validarDni(dni.value)) {
			msgDni.innerHTML = "Formato de DNI no válido (12345678X).";
			return false;
		}
		msgDni.innerHTML = "";
		return true;
	}

	function validacionSexo() {
		if (!validarSexo()) {
			msgSexo.innerHTML = "Campo vacío";
			return false;
		}
		msgSexo.innerHTML = "";
		return true;
	}

	function validacionAcepto() {
		if (!validarCheck(acepto)) {
			msgCheck.innerHTML = "Debe aceptar las condiciones.";
			return false;
		}
		msgCheck.innerHTML = "";
		return true;
	}

	function validarFormulario() {
		var valido = true;

		if (!validacionNombre())
			valido = false

		if (!validacionApellidos())
			valido = false;

		if (!validacionDni())
			valido = false;

		if (!validacionSexo())
			valido = false;

		if (!validacionAcepto())
			valido = false;

		return valido;
	}

	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	nombre.addEventListener('blur', validacionNombre);

	apellidos.addEventListener('blur', validacionApellidos);

	dni.addEventListener('blur', validacionDni);

	for (var i = 0; i < sexo.length; i++) {
		sexo[i].addEventListener('blur', validacionSexo);
	}

	acepto.addEventListener('blur', validacionAcepto);

	document.getElementById("crear").addEventListener("click", function() {
		if (validarFormulario()) {
			usuario = new Usuario(nombre.value, apellidos.value, dni.value, sexoSeleccionado);
			setCookie("nombre", nombre.value, 1);
			setCookie("apellidos", apellidos.value, 1);
			setCookie("dni", dni.value, 1);
			setCookie("sexo", sexoSeleccionado, 1);
			usuario.mostrar();
			usuario.crearListItem();
		}
	});

	document.getElementById("limpiar").addEventListener("click", function() {
		setCookie("nombre", "", -1);
		setCookie("apellidos", "", -1);
		setCookie("dni", "", -1);
		setCookie("sexo", "", -1);
		msgNombre.innerHTML = "";
		msgApellidos.innerHTML = "";
		msgDni.innerHTML = "";
		msgSexo.innerHTML = "";
		msgCheck.innerHTML = "";
		div.innerHTML = "";
	});

});