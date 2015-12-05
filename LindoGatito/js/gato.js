/**
Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el usuario.
Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un peso (1-15). 
Cada vez que crees un objeto gato aparecerá una ventana nueva con una imagen que 
cambiará en función de su estado (comiendo, durmiendo y jugando, que es su estado habitual). 
El usuario podrá averiguar la edad del gato partiendo de un evento.
	1. Evita las cajas de texto.
	2. No puedes usar ni alert ni prompt.
	3. Hazlo lo más dinámico posible.
	4. Utiliza prototype para los métodos.
*/

function Gato(nombre, dia, mes, anio, raza, peso) {

	if (!comprobarFecha(dia, mes, anio))
		throw new FechaInvalidaError("La fecha de nacimiento introducida no es válida.");

	if (peso < 1 || peso > 15)
		throw new PesoInvalidoError("El peso del gatito introducido no es válido.");

	this.nombre = nombre;
	this.fechaNacimiento = new Date(anio, mes-1, dia);
	this.raza = raza;
	this.peso = peso;
	this.edad = this.calcularEdad();
	this.estado = "Jugando";
	this.aspecto = "img/jugar.jpg";
	this.ventanaGato = window.open("", "_blank", "width=600,height=600");
	this.ventanaGato.document.open();
	this.ventanaGato.document.write('<!DOCTYPE html>'
		+ '<html>'
		+ '<head>'
		+ '		<meta charset="UTF-8">'
		+ '		<title>' + this.nombre + '</title>'
		+ '		<link rel="stylesheet" type="text/css" href="css/estilos2.css">'
		+ '		<script type="text/javascript" src="js/ventanaGato.js"></script>'
		+ '		<script type="text/javascript" src="js/gato.js"></script>'
		+ '</head>'
		+ '<body>'
		+ '		<div id="contenedor">'
		+ '			<h1>' + this.nombre + '</h1>'
		+ '			<div id="img"><img id="aspecto" src="' + this.aspecto + '" width="300" height="300"></div>'
		+ '			<div id="contenido"><p>Hola, mi nombre es ' + this.nombre + ' y soy un gato '
		+ 			this.raza + '.<br />Nací un ' + this.fechaNacimiento.toLocaleDateString('en-GB') + '.</p></div>'
		+ '			<div id="peso"><p><strong>Peso: </strong>' + this.peso + 'kg.</p></div>'
		+ '			<div id="edad"></div>'
		+ '			<div id="estado"></div>'
		+ '			<div id="cajaBotones"><button type="button" id="jugar">Jugar</button>'
		+ '			<button type="button" id="comer">Comer</button>'
		+ '			<button type="button" id="dormir">Dormir</button>'
		+ '			<button type="button" id="mostrarEdad">Mostrar edad</button></div>'
		+ '		</div>'
		+ '</body>'
		+ '</html>');
	this.ventanaGato.document.close();
}

Gato.prototype.jugar = function() {
	if (!this.comprobarPeso(this.peso-1))
		throw new PesoInvalidoError("<p>El gatito no puede jugar más porque está muerto.</p>");
	this.peso -= 1;
	this.estado = "Jugando";
	this.aspecto = "img/jugar.jpg";
}

Gato.prototype.comer = function() {
	if (!this.comprobarPeso(this.peso+1))
		throw new PesoInvalidoError("<p>El gatito no puede comer más porque está muerto.</p>");
	this.peso += 1;
	this.estado = "Comiendo";
	this.aspecto = "img/comer.jpg";
}

Gato.prototype.dormir = function() {
	this.estado = "Durmiendo";
	this.aspecto = "img/dormir.jpg";
}

Gato.prototype.mostrarEdad = function() {
	var msgEdad = '<p><strong>Edad: </strong>' + this.edad + ' años.</p>';
	return msgEdad;
}

Gato.prototype.comprobarPeso = function(peso) {
	if (peso < 1 || peso > 15) {
		this.estado = "Muerto";
		this.aspecto = "img/muerto.jpg";
		return false;
	}
	return true;
}

function comprobarFecha(dia, mes, anio) {
	var date;
	mes = mes - 1;
	date = new Date(anio, mes, dia);

	if (date.getDate() == dia)
		if (date.getMonth() == mes)
			if (date.getFullYear() == anio)
				return true;
	return false;
}

Gato.prototype.calcularEdad = function() {
	var date = new Date();
	var edad = date.getFullYear() - this.fechaNacimiento.getFullYear();

	if (date.getMonth() < this.fechaNacimiento.getMonth())
		edad--;

	if (date.getMonth() == this.fechaNacimiento.getMonth())
		if (date.getDate() < this.fechaNacimiento.getDate())
			edad--;

	return edad;
}

function FechaInvalidaError(message) { 
	this.name = "FechaInvalidaError";
	this.message = message; 
}

function PesoInvalidoError(message) { 
	this.name = "PesoInvalidoError";
	this.message = message; 
}