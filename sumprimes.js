/*******************************************

Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.

******************************************/

// noprotect
function sumPrimes(num){
	var res = [], final = 0;
	function isPrime(val){
		if(num < 2){
			return false;
		}
		for(var i = 2; i < val; i++){
			if(val % i === 0){
				return false;
			}
		}return true;
	}
	for(var j = 2; j <= num; j++){
		if(isPrime(j)){
			res.push(j);
		}
	}
	for(var k = 0; k < res.length; k++){
		final += res[k];
	}
	return final;
}
sumPrimes(977);
