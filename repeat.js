/******************************************

Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number.

*******************************************/

function repeat(str, num) {
    var val = [];           // Initialze a variable
    for(var i = 0; i < num; i++){
        // Run a loop num times
        // push str to the initialized variable
        val.push(str);
    }
    // join the values in val
    val = val.join("");
    
    // return val
    return val;
}

repeat("abc", 3);
