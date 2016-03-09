$(document).ready(function() {

	var recurso = $('recurso');
	var contenidos = $('contenidos');
	var	estados = $('estados');
	var	limpiar = $('limpiar');
	var	mostrar = $('enviar');

	recurso.val($(location).attr('href'));

	mostrar.on('click', function() {
		$.get(recurso.val())
			.done(function(data) {
				contenidos.text(data);
				estados.text(estados.html() + 'Done\n');
			})
			.fail(function() {
				contenidos.text('Error! La página solicitada no se ha podido encontrar.');
				estados.text(estados.html() + 'Error\n');
			})
			.always(function() {
				estados.text(estados.html() + 'Finished\n');
			});
	});
	
	limpiar.on('click', function() {
		contenidos.text('');
		estados.text('');
	});

});