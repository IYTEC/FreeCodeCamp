/************************************

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

*************************************/

function unite(arr1, arr2, arr3) {
  var res = [];
  for(var i = 0; i < arguments.length; i++){
      arguments[i].map(
          function(val1){
              if(res.indexOf(val1) === -1){
                  res.push(val1);
              }
          }
          );
  }
  return res;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
