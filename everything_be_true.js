/********************************************

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

*******************************************/


function truthCheck(collection, pre) {
  var count = 0, check = collection.length;
  for(var i in collection){
      if(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre]) !== false){
             count++;
  		}
   // break;
  }
  if(count == check){
    return true;
  }else{
    return false;
  }
}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");
//every([{"single": "yes"}], "single");
