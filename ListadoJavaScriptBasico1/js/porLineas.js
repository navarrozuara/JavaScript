/*
Implementa PorLineas que visualice los números del 0 al 100 separados por comas. 
Cada múltiplo de 7 ha de comenzar en una línea nueva.
*/

function porLineas() {
	var msg = "";

	for (var i = 0; i <= 100; i++) {
		if (i % 7 != 0)
			if (i != 100)
				msg += i + ", ";
			else
				msg += i;
		else
			msg += "<br />" + i + ", ";
	}

	document.getElementById("msg").innerHTML = "<strong>Números del 0 al 100:</strong>" + msg;
}

window.addEventListener("load", porLineas);