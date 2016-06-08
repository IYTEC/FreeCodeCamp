/**********************************

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

**********************************/

function chunk(arr, size) {
    var res = [];           // Initialize a variable to an array
    
    // Loop through elements in function argument first element
    for(var i = 0; i < arr.length;){
        // slice the array, i.e arr, starting
        // from the i'th to i'th + size element to the initialized array
        res.push(arr.slice(i,i+=size));
    }
    return res;
}
chunk(["a", "b", "c", "d"], 2);
