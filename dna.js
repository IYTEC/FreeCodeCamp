/************************************************

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

************************************************/

function pair(str) {
  var val = str.split("");
  var res = [];
  for(var i = 0; i < val.length; i++){
      if(val[i] == "A"){
          res.push(["A", "T"]);
      }else if(val[i] == "T"){
          res.push(["T", "A"]);
      }else if(val[i] == "C"){
          res.push(["C", "G"]);
      }else if(val[i] == "G"){
          res.push(["G", "C"]);
      }
  }
  return res;
}
pair("GCG");
