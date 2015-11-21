/**
Modificar el ejercicio anterior del objeto Factura para crear una pseudoclase llamada Factura y que permita 
crear objetos de ese tipo. Se deben utilizar las funciones constructoras y la propiedad prototype.
Para instanciar la clase, se debe utilizar la instrucción Factura(cliente, elementos), donde cliente 
también es una pseudoclase que guarda los datos del cliente y elementos es un array simple que contiene 
las pseudoclases de todos los elementos que forman la factura.
*/

function Cliente(nombre, direccion, nif) {
	this.nombre = nombre;
	this.direccion = direccion;
	this.nif = nif;
}

function Elemento(descripcion, cantidad, precio) {
	this.descripcion = descripcion;
	this.cantidad = cantidad;
	this.precio = precio;
}

function Factura(cliente, elementos) {
	this.cliente = cliente;
	this.elementos = elementos;
	this.iva = 16;
	this.total = 0;
};

Factura.prototype.mostrarCliente = function() {
	return this.cliente;
};

Factura.prototype.mostrarElementos = function() {
	return this.elementos;
};

Factura.prototype.calcularTotal = function() {
	for (var i = 0; i < this.elementos.length; i++) 
		this.total += this.elementos[i].cantidad * this.elementos[i].precio;
	this.total = this.total + ((this.total * this.iva) / 100);
};

Factura.prototype.mostrarTotal = function() {
	this.calcularTotal();
	return Math.round(this.total*100)/100;
};

window.addEventListener("load", function() {
	var cliente1 = new Cliente("Elisa", "Rinconada de San Antonio", "45944440P");
	var elementos1 = [new Elemento("Televisor", "1", "550.99"),
					  new Elemento("Secador", "3", "19.99"),
					  new Elemento("Disco SSD", "2", "35")
					];
	var factura1 = new Factura(cliente1, elementos1);
	document.getElementById("contenido").innerHTML = "<p>Nombre del cliente: "+factura1.mostrarCliente().nombre+"<br />"+
													 "NIF: "+factura1.mostrarCliente().nif+"<br />"+
													 "Dirección: "+factura1.mostrarCliente().direccion+"</p>"+
													 "Información de la factura: <br />"+
													 "<table>"+
													 "<tr><th>Descripción</th><th>Cantidad</th><th>Precio/Unidad</th></tr>"+
													 "<tr>"+
													 	"<td>"+factura1.mostrarElementos()[0].descripcion+"</td>"+
													 	"<td>"+factura1.mostrarElementos()[0].cantidad+"</td>"+
													 	"<td>"+factura1.mostrarElementos()[0].precio+" €</td>"+
													 "</tr>"+
													 "<tr>"+
													 	"<td>"+factura1.mostrarElementos()[1].descripcion+"</td>"+
													 	"<td>"+factura1.mostrarElementos()[1].cantidad+"</td>"+
													 	"<td>"+factura1.mostrarElementos()[1].precio+" €</td>"+
													 "</tr>"+
													 "<tr>"+
													 	"<td>"+factura1.mostrarElementos()[2].descripcion+"</td>"+
													 	"<td>"+factura1.mostrarElementos()[2].cantidad+"</td>"+
													 	"<td>"+factura1.mostrarElementos()[2].precio+" €</td>"+
													 "</tr>"+
													 "</table>"+
													 "<p>Total factura = "+factura1.mostrarTotal()+" €</p>";
});