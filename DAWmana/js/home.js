$(function() {
	//Comprobación de cookies
	$('#cookies').hide();

	if (!navigator.cookieEnabled || !window.navigator.cookieEnabled) {
		$('#cookies').show();
	}

	$('#aceptar').on('click', function() {
		$('#cookies').hide();
	});

	//Adaptación de la cabezera al alto de la ventana
	$('#cabezera').height($(window).height());

	//Scroll de los enlaces
	$(window).scroll(function(){
		if ($(this).scrollTop() > 400)
			$('.arriba').fadeIn(1000);
		else 
			$('.arriba').fadeOut(1000);
	});

	$('.arriba').click(function(evento) {
		evento.preventDefault();
		$('html, body').animate({
			scrollTop: $('body').offset().top
		}, 2000);
	});

	$('.actividades').click(function(evento) {
		evento.preventDefault();
		$('html, body').animate({
			scrollTop: $('#actividades').offset().top
		}, 2000);
	});

	$('.ponentes').click(function(evento) {
		evento.preventDefault();
		$('html, body').animate({
			scrollTop: $('#ponentes').offset().top
		}, 2000);
	});

	$('.concursos').click(function(evento) {
		evento.preventDefault();
		$('html, body').animate({
			scrollTop: $('#concursos').offset().top
		}, 2000);
	});

	$('.eventos').click(function(evento) {
		evento.preventDefault();
		$('html, body').animate({
			scrollTop: $('#eventos').offset().top
		}, 2000);
	});

	//Añadimos widget accordion a las actividades
	$('#act1, #act2, #act3, #act4, #act5, #act6, #act7, #act8, #act9, #act10, #act11, #act12, #act13, #act14, #act15, #act16, #act17, #act18').accordion({
		collapsible: true,
		heightStyle: 'content',
		active: false
	});

	//Añadimos widget tooltip
	$(document).tooltip({
		track: true
	});

	//Utilización del carrusel
	$('.img-ponentes').pgwSlideshow({
		autoSlide: true,
		intervalDuration: 5000,
		mainClassName: 'pgwSlideshowLight'
	});

	//Utilización del lightbox
	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true,
		'showImageNumberLabel': false,
		'positionFromTop': 120,
		'disableScrolling': true
	});

	//Utilización del carrusel
	$('.img-carteles').pgwSlideshow({
		autoSlide: true,
		displayControls: false,
		intervalDuration: 5000,
		mainClassName: 'pgwSlideshowLight',
		transitionEffect: 'fading'
	});

	//Formulario de login
	var formLogin = $('#form-login');
	var dialogLogin = $('#dialog-login');

	$('.login').on('click', function(evento) {
		evento.preventDefault();
		$(dialogLogin).dialog('open');
	});

	$(dialogLogin).dialog({
		title: 'Acceso de usuarios',
		autoOpen: false,
		modal: true,
		width: 300,
		buttons: {
			'Iniciar sesión': function() {
				if ($(formLogin).valid()) {
					$(this).dialog('close');
					window.location.href = 'ponente.html';
				}
			},
			'Cancelar': function() {
				$(this).dialog('close');
			}
		}
	});

	$(formLogin).validate({
		debug: true,
		rules: {
			usuario: {
				required: true,
				minlength: 6,
				usuario: true
			},
			password: {
				required: true,
				minlength: 6,
				password: true
			}
		},
		messages: {
			usuario: {
				usuario: "El usuario no puede contener espacios."
			},
			password: {
				password: "La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter de puntuación."
			}
		}
	});

	$.validator.addMethod('usuario', function(value) {
		return /^[\w]+$/.test(value.trim());
	});

	$.validator.addMethod('password', function(value) {
		return /^[A-Za-z0-9\d\W]*$/.test(value.trim())
			&& /[A-Z]/.test(value.trim())
			&& /[a-z]/.test(value.trim())
			&& /[\d]/.test(value.trim())
			&& /[\W]/.test(value.trim());
	});

	//Formulario de registro
	var formRegistro = $('#form-registro');
	var dialogRegistro = $('#dialog-registro');
	var msgReg = $('#dialog-message');

	$('.registro').on('click', function(evento) {
		evento.preventDefault();
		$(dialogRegistro).dialog('open');
	});

	$(dialogRegistro).dialog({
		title: 'Registro de asistentes',
		autoOpen: false,
		modal: true,
		width: 300,
		buttons: {
			'Enviar': function() {
				if ($(formRegistro).valid()) {
					$(this).dialog('close');
					$(msgReg).dialog('open');
				}
			},
			'Cancelar': function() {
				$(this).dialog('close');
			}
		}
	});

	$(msgReg).dialog({
		title: 'Registro de asistentes',
		autoOpen: false,
		modal: true,
		buttons: {
			'Ok': function() {
				$(this).dialog('close');
			}
		}
	});

	$(formRegistro).validate({
		debug: true,
		rules: {
			nombre: {
				required: true,
				texto: true
			},
			apellidos: {
				required: true,
				texto: true
			},
			dni: {
				required: true,
				dni: true
			},
			email: {
				required: true,
				email: true
			},
			procedencia: {
				required: true,
				texto: true
			}
		},
		messages: {
			nombre: {
				texto: "El formato del nombre no es válido."
			},
			apellidos: {
				texto: "El formato del apellido no es válido."
			},
			dni: {
				dni: "El formato del DNI no es válido."
			},
			procedencia: {
				texto: "El formato de la procedencia no es válido."
			}
		}
	});

	$.validator.addMethod('dni', function(value) {
		return /^\d{8}[-]?[a-zA-Z]$/.test(value.trim());
	});

	$.validator.addMethod('texto', function(value) {
		return /^([a-záéíóúñA-ZÁÉÍÓÚÑ]{3,}\s*)+$/.test(value.trim());
	});
});