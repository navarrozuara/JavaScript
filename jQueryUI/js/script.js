$(function() {
	$("#tabs").tabs();
	$("#datepicker").datepicker({
		dateFormat: "dd-mm-yy",
		minDate: new Date(),
		dayNames: [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ],
		dayNamesMin: [ "Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab" ],
		monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
					  "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
		monthNamesShort: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ],
		showAnim: "drop"
	});
	$("#dialog").dialog({
		autoOpen: false,
		show: {
			effect: "blind",
			duration: 1000
		},
		hide: {
			effect: "explode",
			duration: 1000
		},
		title: "Diálogo básico",
		width: 400,
		buttons: [
			{
				text: "Ok",
				click: function() {
					$(this).dialog("close");
				}
			},
			{
				text: "Cancel",
				click: function() {
					$(this).dialog("close");
				}
			}
		]
	});
	$("#opener").on('click', function() {
		$("#dialog").dialog("open");
	});
	$("#usuario").tooltip({
		show: { 
			effect: "blind", 
			duration: 1000 
		}
	});
});