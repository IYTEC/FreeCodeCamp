/******************************************

Check if a string (first argument, str) ends with the given target string (second argument, target).

***********************/

function confirmEnding(str, target) {
    str = str.split(" ");               // Split first function argument
    var val = str[str.length-1];        // Pass the last value in first function argument to variable
    var test = val.substr(-(target.length));        // pass the last argument of target i.e second funciton argument to variable
    
    // check if the test and target is the same
    if(test == target){
        
        // if same return true
        return true;
    }else{
        
        // if not return false
        return false;
    }
}

confirmEnding("Bastian", "n");
