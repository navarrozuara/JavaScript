/**
An object has a className property which keeps it’s class names delimited by spaces:
var obj = {
	className: 'open menu'
}
Write a function addClass(obj, cls) which adds a class cls, but only if it doesn’t yet exist.
P.S. Your function shouldn’t add extra spaces.
*/

var obj = {
	className: 'open menu'
}

function addClass(obj, cls) {
	var c = obj.className.split(' ');
	for (var i = c.length-1; i >= 0; i--) {
		if (c[i] == cls)
			return;
	}
	obj.className += ' '+cls;
}

window.addEventListener("load", function() {
	console.log("Objeto: "+obj.className);
	addClass(obj, 'new');
	addClass(obj, 'open');
	addClass(obj, 'me');
	console.log("Objeto modificado: "+obj.className);
});