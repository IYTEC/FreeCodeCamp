/* **************************** 
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Here are some helpful links:

Global String Object
String.split()
Array.reverse()
Array.join()

******************************/


function reverseString(str) {
    // split will split a string into and returns an array
    // reverse will reverse value of an array
    // join will convert values in an array to a string
    
    return str.split('').reverse('').join('');
}

reverseString("hello");
