/****************************

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

*********************************/

function palindrome(str) {
    // declares a variable and initialize variable to function argument
    // Use reqular expression to remove all occurence of
    // special characters from the function argument
    // split, reverse and join the value, converts to lowercase.
    var reversed = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()" "]/g, "").split("").reverse().join('').toLowerCase();
    
    // declares another variable and initialize variable to function argument
    // Use reqular expression to remove all occurence of
    // special characters from the function argument
    // converts to lowercase.
    var original = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()" "]/g,"").toLowerCase();
    
    // compare reversed value to original value (both converted to lower case)
    // if they are not the same, then, not a palidrome
    // else function argument is a palidrome.
    if(reversed !== original){
        return false;
    }else{
        return true;
    }
  
}


palindrome("eye");
