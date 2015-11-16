/**
Make a generic function filter(arr, func) which filters an array using given function. 
Only those elements for which func(elem) returns true should compose the result.
Every element which pass through and returns new array which contains only numeric values from arr.
*/

var arr = ["a", -1, 2, "b"];

function filter(array, func) {
	for (var i = 0; i < array.length; i++) {
		if (!func(array[i]))
			array.splice(i,1);
	}
}

window.addEventListener("load", function() {
	console.log("Array: "+arr);
	filter(arr, function(val) {
		return !isNaN(val);
	});
	console.log("Array de valores numéricos: "+arr);
	filter(arr, function(val) {
		return val > 0;
	});
	console.log("Array de valores numéricos positivos: "+arr);
});