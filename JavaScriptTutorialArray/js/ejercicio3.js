/**
Create a function find(arr,value) which finds a value in given array and 
returns its index, or -1 if not found.
*/

var arr = ["test", 2, 1.5, false];

function find(array, value) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === value)
			return i;
	}
	return -1;
}

window.addEventListener("load", function() {
	console.log("Array: "+arr);
	console.log("\"test\" encontrado en la posición: "+find(arr, "test"));
	console.log("2 encontrado en la posición: "+find(arr, 2));
	console.log("1.5 encontrado en la posición: "+find(arr, 1.5));
	console.log("true encontrado en la posición: "+find(arr, true));
});
