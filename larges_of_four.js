/********************************************
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

*********************************/

function largestOfFour(arr) {
    var result;         
    var val = [];       
    for(var i = 0; i < arr.length; i++){
        // loops through each element in function argument i.e arr
        // call a reduce function to get the maximum of the previous element and current element
        // pass the max to result
        // push value of result to val.
        result = arr[i].reduce(function(prevVal, currVal){ return Math.max(prevVal, currVal); });
        val.push(result);
    }
    // return val
    return val;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
