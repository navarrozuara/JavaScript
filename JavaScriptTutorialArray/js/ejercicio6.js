/**
Create a function camelize(str) which transforms a string from "my-short-string" to "myShortString".
So, all parts after a hyphen become camelcased instead.
Note. Remember charAt, substr and check str.toUpperCase() function which transforms the string to upper case.
*/

function camelize(str) {
	var array = str.split("-");
	var cadena = "";
	for (var i = 0; i < array.length; i++) {
		if (i == 0)
			cadena += array[i];
		else
			cadena += array[i].charAt(0).toUpperCase() + array[i].substr(1, array[i].length-1);
	}
	return cadena;
}

window.addEventListener("load", function() {
	console.log("background-color = "+camelize("background-color"));
	console.log("list-style-image = "+camelize("list-style-image"));
});