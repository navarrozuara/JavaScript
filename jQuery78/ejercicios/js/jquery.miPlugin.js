jQuery.fn.miPlugin = function() {
	mivariableComun = "comun";
	alert("Nueva invocación de plugin. Mi variable común: " + mivariableComun);

	this.each(function() {
		elem = $(this);		
		var miVariable = "x";

		function miFuncion() {
			miVariable = elem.text();
			alert("Mi variable local y particular de cada plugin: " + miVariable);
			mivariableComun = "Otra cosa comun!";
		}

		miFuncion();

		elem.click(function() {
			alert("Dentro del evento: " + miVariable);
			miFuncion();
		});	
	});
};