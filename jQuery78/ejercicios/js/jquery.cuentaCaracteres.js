jQuery.fn.cuentaCaracteres = function() {
	this.each(function() {
		var elem = $(this);
		var contador = $('<div>Contador caracteres: ' + elem.prop("value").length + '</div>');
		elem.after(contador);
		elem.data("campocontador", contador);
		elem.keyup(function() {
			var elem = $(this);
			var campocontador = elem.data("campocontador");
			campocontador.text('Contador caracteres: ' + elem.prop("value").length);
		});
	});
	return this;
}; 
