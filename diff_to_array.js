/******************************************

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

*******************************************/
function diff(arr1, arr2) {
    var res = [];
    var vals = arr1.concat(arr2);
    for(var i = 0; i < vals.length; i++){
        if(arr1.indexOf(arr2[i]) === -1){
            res.push(arr2[i]);
        }
    }
    
    for(var j = 0; j < vals.length; j++){
        if(arr2.indexOf(arr1[j]) === -1){
            res.push(arr1[j]);
        }
    }
    var val = res.filter(Boolean);
    return val;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
