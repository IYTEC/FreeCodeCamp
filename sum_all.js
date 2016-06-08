/*************************************

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

*************************************/

function sumAll(arr) {
   var max = Math.max(...arr);
   var min = Math.min(...arr);
   var total = 0;
   var start = min;
   while(start <= max){
       total += min;
       min++;
       start++;
   }
   return total;
}

sumAll([1, 4]);
