function findLongestWord(str) {
    // Split string by word
    var result = str.split(" ");
    // declare a variable to hold an array object.
    var arr = [];
    // initialize a new variable to hold word with the highest length.
    var currHigh = 0;
    
    // push length of each word in function argument to an array
    // using map to loop through each element
    result.map(function(val){ arr.push(val.length); });
    
    // compare value in array to know which is the highest,
    // using reduce to loop through current value and previous value
    currHigh = arr.reduce(function(prevVal, currVal){ return Math.max(prevVal, currVal); });
    return currHigh;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
