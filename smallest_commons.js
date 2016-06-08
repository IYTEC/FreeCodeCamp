/***************************************

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

**************************************/

// noprotect
function smallestCommons(arr) {
  arr = arr.sort(), holder = [], count = 0, mother1 = [], mother2 = [], count = 0;
  for(var i = arr[0]; i <= arr[1]; i++){
  	holder.push(i);
  }
  for(var n = 2; n <= arr[1]; n++){
  	for(var j = 1; j < 2000000; j++){
  		mother1.push(n*j);
  	}
  }
  for(var k = 0; k < 2000000; k++){
  	count = 0;
  	for(var m = 0; m <= holder.length; m++){
  		if(mother1[k] % holder[m] === 0){
  			count++;
  		}
  	}
  	if(count === holder.length){
  			mother2.push(mother1[k]);
  		}
  }
  return mother2[0];
}


smallestCommons([1,5]);
