/**
A prime number is a natural number which has exactly two distinct natural number divisors: 1 and itself.
To find all the prime numbers less than or equal to a given integer n by Eratosthenes’ Sieve:
	1. Create a list of consecutive integers from two to n: (2, 3, 4, ..., n).
	2. Set p=2, the first prime number.
	3. Strike from the list all multiples of p less than or equal to n. (2p, 3p, 4p, etc.)
	4. Set p to first not striked number in the list after p.
	5. Repeat steps 3-4 until p*p > n.
	6. All the remaining numbers in the list are prime.
Implement the Eratosthenes' Sieve in JavaScript. Compute the sum of all primes up to 100 and alert it.
*/

function primeSieve() {
	var primos = [];
	var suma = 0;

	for (var i = 2; i <= 100; i++)
		primos[i] = true;

	for (var i = 2; i*i <= 100; i++) {
		if (primos[i]) {
			for (var j = i; i*j <= 100; j++) {
				primos[i*j] = false;
			}
		}
	}

	for (var i = 2; i <= 100; i++) {
		if (primos[i])
			suma += i;
	}

	return suma;
}

window.addEventListener("load", function() {
	console.log("Suma de los números primos hasta 100: "+primeSieve());
});