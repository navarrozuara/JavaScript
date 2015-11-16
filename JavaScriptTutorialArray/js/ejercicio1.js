/**
1. Create an array styles with elements “Jazz”, “Blues”.
2. Append a value “Rock’n’Roll”.
3. Replace the second value from tail by “Classic”. The array should become “Jazz”,”Classic”,”Rock’n’Roll”. The code should work for any array length.
4. Extract the last value from the array and alert it.
*/

var styles = ["Jazz", "Blues"];

window.addEventListener("load", function() {
	console.log("Array: "+styles);
	styles.push("Rock'n'Roll");
	styles[styles.length-2] = "Classic";
	console.log("Array modificado: "+styles);
	console.log("Último valor: "+styles.pop());
});