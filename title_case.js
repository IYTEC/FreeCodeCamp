/***************************

Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*************************/

function titleCase(str) {
    str = str.split(' ');
    var arr = [];
   for(var i = 0; i < str.length; i++){
       // convert first character of each word in str to uppercase
       // converts the rest of the characters in the string to lowercase
       arr.push(str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase());
   }
    // join all the values in the array
    arr = arr.join(" ");
    return arr;
}

titleCase("I'm a little tea pot");
