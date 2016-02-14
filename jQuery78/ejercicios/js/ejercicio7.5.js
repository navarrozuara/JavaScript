$(document).ready(function() {
	$(".ch").checkboxPersonalizado();
	$("#otro").checkboxPersonalizado({
		activo: false,
		colorTextos: {
			activo: "#F80",
			pasivo: "#98A"
		},
		imagen: {
			activo: 'images/weather_cloudy.png',
			pasivo: 'images/weather_rain.png'
		},
		textos: {
			activo: 'Buen tiempo :)',
			pasivo: 'Buena cara ;)'
		},
		cssAdicional: {
			border: "1px solid #DD5",
			width: "100px"
		},
		nameCheck: "buen_tiempo"
	});
});