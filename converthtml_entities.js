/*********************************

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

*********************************/
function convert(str) {
  var val = str.split("");
  for(var i = 0; i < val.length; i++){
  	if(val[i] == "&"){
  		val[i] = "&amp;";
  	}else if(val[i] == "<"){
  		val[i] = "&lt;";
  	}else if(val[i] == ">"){
  		val[i] = "&gt;";
  	}else if(val[i] == "\""){
  		val[i] = "&quot;";
  	}else if(val[i] == "\'"){
  		val[i] = "&apos;";
  	}
  }
  var res = val.join("");
  return res;
}

convert("Dolce & Gabbana");
