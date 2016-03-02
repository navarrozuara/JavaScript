$(function() {
	var cartel = $('#cartel');

	//Comprobación de cookies
	$('#cookies').hide();

	if (!navigator.cookieEnabled || !window.navigator.cookieEnabled) {
		$('#cookies').show();
	}

	$('#aceptar').on('click', function() {
		$('#cookies').hide();
	});

	//Efectos del cartel
	cartel.hide();
	cartel.show({
		effect: "explode",
		duration: 2000
	});
	cartel.fadeOut(4000);

	window.setTimeout(function() {
		window.location.href = 'home.html';
	}, 5000);
});