/**
Implementa mediante javaScript el ejercicio primos mediante closure.
Han de estar como elementos privados:
	1. vector de números primos
	2. acumulador de números primos
	3. esPrimo() que está en el foro
Recuerda que:
	1. No podéis crear ninguna variable global (function(){...})();
	2. El resultado se mostrará en una ventana nueva.
*/

(function(){
	var primos = [2];
	var resultado = 0;

	function esPrimo(primo, anterior) {
		if (anterior === 1)
			return true;
		if (primo%anterior === 0)
			return false;
		return esPrimo(primo, anterior-1);
	}

	function annadirPrimos() {
		for (var i = 3; i < 101; i++) {
			if (esPrimo(i, i-1))
				primos.push(i);
		}
	}

	function acumuladorPrimos() {
		for (var i = 0; i < primos.length; i++)
			resultado += primos[i];
	}

	function mostrarPrimos() {
		var nuevaVentana = window.open();
		nuevaVentana.document.open();
		nuevaVentana.document.write(
			"<!DOCTYPE html>"+
			"<html lang=\"en\">"+
			"<head>"+
				"<meta charset=\"UTF-8\">"+
				"<style type=\"text/css\">"+
					"body {"+
						"font-family: Helvetica, Arial, sans-serif;"+
					"}"+
				"</style>"+
				"<title>Elisa Navarro Zuara</title>"+
			"</head>"+
			"<body>"+
				"<p><strong>Números primos:</strong></p>"+primos+
				"<p><strong>Acumulador de números primos:</strong></p>"+resultado+
			"</body>"+
			"</html>");
		nuevaVentana.document.close();
	}

	annadirPrimos();
	acumuladorPrimos();
	mostrarPrimos();
})();