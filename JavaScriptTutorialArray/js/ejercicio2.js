/**
Write a code to alert a random value from array arr:
	var arr = ["Plum","Orange","Donkey","Carrot","JavaScript"];
P.S. The code to get a random integer from min to max (inclusive) is:
	var rand = min + Math.floor(Math.random()*(max+1-min));
*/

var arr = ["Plum","Orange","Donkey","Carrot","JavaScript"];
var rand = Math.floor(Math.random()*arr.length);

window.addEventListener("load", function() {
	console.log("Array: "+arr);
	console.log("Número aleatorio: "+rand);
	console.log("Valor: "+arr[rand]);
});