/**
Create a function filterNumericInPlace(arr) which takes an array and removes all non-numeric values from it.
*/

var arr = ["a", 1, "b", 2, 1.5];

function filterNumericInPlace(array) {
	for (var i = 0; i < array.length; i++) {
		if (isNaN(array[i]))
			array.splice(i,1);
	}
}

window.addEventListener("load", function() {
	console.log("Array: "+arr);
	filterNumericInPlace(arr);
	console.log("Array de valores numéricos: "+arr);
});