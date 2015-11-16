/**
Create a function ageSort(people) to sort array of people objects by their age.
*/

var john = { 
	name: "John Smith", 
	age: 23 
}

var mary = { 
	name: "Mary Key", 
	age: 18 
}

var bob = { 
	name: "Bob-small", 
	age: 6 
}

var people = [john, mary, bob];

function compare(a, b) {
	if (a.age > b.age) 
		return 1;
	else if (a.age < b.age) 
		return -1;
	else 
		return 0;
}

function ageSort(people) {
	people.sort(compare);
}

window.addEventListener("load", function() {
	console.log("Array: ");
	for (var i = 0; i < people.length; i++)
		console.log(people[i].name);
	ageSort(people);
	console.log("Array ordenado por edad: ");
	for (var i = 0; i < people.length; i++)
		console.log(people[i].name);
});