/*************************************

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

************************************/

function bouncer(arr) {
    var res = [];
  for(var i = 0; i < arr.length; i++){
      var val = Boolean(arr[i]);
      if(val !== false){
          res.push(arr[i]);
      }
  }
  return res;
}
bouncer([7, "ate", "", false, 9]);
