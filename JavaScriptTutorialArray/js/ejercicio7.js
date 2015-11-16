/**
An object has a className property which keeps it’s class names delimited by spaces:
var obj = {
	className: 'open menu'
}
Write a function removeClass(obj, cls) which removes a class cls if it is set.
*/

var obj = {
	className: 'open menu'
}

function removeClass(obj, cls) {
	var c = obj.className.split(' ');
	for (var i = c.length-1; i >= 0; i--) {
		if (c[i] == cls)
			c.splice(i,1);
	}
	obj.className = c.join(' ');
}

window.addEventListener("load", function() {
	console.log("Objeto: "+obj.className);
	removeClass(obj, 'open');
	removeClass(obj, 'blabla');
	console.log("Objeto modificado: "+obj.className);
});