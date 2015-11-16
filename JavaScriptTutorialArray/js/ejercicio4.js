/**
Create a function filterNumeric(arr) which takes an array and 
returns new array which contains only numeric values from arr.
*/

var arr = ["a", 1, "b", 2, 1.5];

function filterNumeric(array) {
	var arrayNumeric = [];
	for (var i = 0; i < array.length; i++) {
		if (!isNaN(array[i]))
			arrayNumeric.push(array[i]);
	}
	return arrayNumeric;
}

window.addEventListener("load", function() {
	console.log("Array: "+arr);
	console.log("Array de valores numéricos: "+filterNumeric(arr));
});