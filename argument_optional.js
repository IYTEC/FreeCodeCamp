/*****************************************

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*****************************************/


function addTogether(val1){
	if(arguments.length > 1){
		var res = 0;
		for(var i = 0; i < arguments.length; i++){
			if(typeof(arguments[i]) !== "number"){
				return undefined;
				// break;
			}else{
				res += arguments[i];	
			}
		}
		return res;
	}else{
		if(typeof(val1) !== "number"){
			return undefined;
		}else{
				return function inAdd(val2){
					if(typeof(val2) !== "number"){
						return undefined;
					}else{
						return val1 + val2;
					}
			}
		}
	}
}

// console.log(add(2)(3));
// console.log(add("http://bit.ly/IqT6zt"));
// console.log(add(2, "3"));
console.log(addTogether(2)([3]));
// console.log(add(2, 3));


addTogether(2,3);
