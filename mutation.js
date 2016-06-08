/*******************************************

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

********************************************/

function mutation(arr) {
    // initialize a variable to the second value in array passed as function argument
    var val = arr[1].toLowerCase().split("");
    
    // initialize a second variable to the first value in array passed as function argument
    var test = arr[0].toLowerCase();
    
    // loop through test
    for(var i = 0; i < (test.length+1); i++){
        // if the i'th value of val does not exist in text
        if(test.indexOf(val[val.length-1]) == -1){
            // return false
            return false;
        // if the i'th value of val exit in text
        }else if(test.indexOf(val[i]) !== -1){
            // return true
            return true;
        }else{
            return false;
        }
    }
}

mutation(["hello", "hey"]);
