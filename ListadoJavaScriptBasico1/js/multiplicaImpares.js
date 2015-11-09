/*
Implementa MultiplicaImpares que multiplique los 20 primeros 
números impares y muestre el resultado en pantalla.
*/

function multiplicaImpares() {
	var contImpares = 20;
	var resultado = 1;
	var num = 1;

	while (contImpares > 0) {
		if (num % 2 != 0) {
			resultado *= num;
			contImpares--;
		}
		num++;
	}

	document.getElementById("msg").innerHTML = "El resultado de multiplicar los 20 primeros números impares es: " + resultado;
}

window.addEventListener("load", function() {
	document.getElementById("enviar").addEventListener("click", multiplicaImpares);
});