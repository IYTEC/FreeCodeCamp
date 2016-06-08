/******************************************

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

******************************************/

function truncate(str, num){
    // check if the length of string is greater than a given number
    // if true...
    if(str.length > num){
        // slice from beginning of the string to num
        var val = str.slice(0, num);
        // if value is less than or equal to 3
        if(val.length <= 3){
            // return the value + 3 dots
            return val+"...";
        }else{
            // if not, slice from beginning of the string to num - 3
            // + 3 dots
            return str.slice(0, num-3)+"...";
        }
    // if not true...
    }else{
        // just return the string
        return str;
    }
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
