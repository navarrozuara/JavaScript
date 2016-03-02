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
	$('#pcabezera').height($(window).height());

	//Scroll de los enlaces
	$('.perfil').click(function(evento) {
		evento.preventDefault();
		$('html, body').animate({
			scrollTop: $('#perfil').offset().top
		}, 2000);
	});

	//Añadimos widget tabs
	$('#tabs').tabs({
		event: "mouseover"
	});

	//Formulario de modificación de datos
	var formMod = $('#form-mod');
	var dialogMod = $('#dialog-mod');
	var msgMod = $('#message-mod');

	$('.modificar').on('click', function() {
		$(dialogMod).dialog('open');
	});

	$(dialogMod).dialog({
		title: 'Modificación de datos',
		autoOpen: false,
		modal: true,
		width: 600,
		buttons: {
			'Enviar': function() {
				if ($(formMod).valid()) {
					$(this).dialog('close');
					$(msgMod).dialog('open');
				}
			},
			'Cancelar': function() {
				$(this).dialog('close');
			}
		}
	});

	$(msgMod).dialog({
		title: 'Modificación de datos',
		autoOpen: false,
		modal: true,
		buttons: {
			'Ok': function() {
				$(this).dialog('close');
			}
		}
	});

	$(formMod).validate({
		debug: true,
		rules: {
			dnombre: {
				required: true,
				texto: true
			},
			dapellidos: {
				required: true,
				texto: true
			},
			empresa: {
				required: true
			},
			fechainicio: {
				required: true
			},
			fechafin: {
				required: true
			}
		},
		messages: {
			dnombre: {
				texto: "El formato del nombre no es válido."
			},
			dapellidos: {
				texto: "El formato de los apellidos no es válido."
			}
		}
	});

	$.validator.addMethod('texto', function(value) {
		return /^([a-záéíóúñA-ZÁÉÍÓÚÑ]{3,}\s*)+$/.test(value.trim());
	});

	//Formulario para añadir actividades
	var formAct = $('#form-act');
	var dialogAct = $('#dialog-act');
	var msgAct = $('#message-act');

	$('.annadir').on('click', function() {
		$(dialogAct).dialog('open');
	});

	$(dialogAct).dialog({
		title: 'Añadir actividad',
		autoOpen: false,
		modal: true,
		width: 600,
		buttons: {
			'Añadir': function() {
				if ($(formAct).valid()) {
					$(this).dialog('close');
					$(msgAct).dialog('open');
				}
			},
			'Cancelar': function() {
				$(this).dialog('close');
			}
		}
	});

	$(msgAct).dialog({
		title: 'Añadir actividad',
		autoOpen: false,
		modal: true,
		buttons: {
			'Ok': function() {
				$(this).dialog('close');
			}
		}
	});

	$(formAct).validate({
		debug: true,
		rules: {
			pnombre: {
				required: true,
				texto: true
			},
			resumen: {
				required: true
			},
			descripcion: {
				required: true
			},
			imagen: {
				required: true,
				url: true
			},
			numero: {
				required: true,
				number: true,
				min: 1
			}
		},
		messages: {
			pnombre: {
				texto: "El formato del nombre no es válido."
			}
		}
	});

	//Datepicker para la fecha de inicio
	$('#fechainicio').datepicker({
		dateFormat: "dd-mm-yy",
		minDate: new Date(2016, 00, 25),
		maxDate: new Date(2016, 00, 29),
		dayNames: [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ],
		dayNamesMin: [ "Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab" ],
		monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
		monthNamesShort: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ],
		showAnim: "drop",
		onClose: function(selectedDate) {
			if (selectedDate) {
				$('#fechafin').datepicker('option', 'disabled', false);
				$('#fechafin').datepicker('option', 'minDate', selectedDate);
			}
		}
	});

	//Datepicker para la fecha de fin
	$('#fechafin').datepicker({
		disabled: true,
		dateFormat: "dd-mm-yy",
		minDate: new Date(2016, 00, 25),
		maxDate: new Date(2016, 00, 29),
		dayNames: [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ],
		dayNamesMin: [ "Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab" ],
		monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
		monthNamesShort: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ],
		showAnim: "drop",
		onClose: function(selectedDate) {
			if (selectedDate)
				$('#fechainicio').datepicker('option', 'maxDate', selectedDate);
		}
	});
});