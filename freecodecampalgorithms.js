function palindrome(str) {
  // Good luck!
  //var patt = /\S+/g;
    var another = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()" "]/g, "").split("").reverse().join('').toLowerCase();
    var compare = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()" "]/g,"").toLowerCase();
    if(another !== compare){
        return false;
    }else{
        return true;
    }
  
}
function truncate(str, num){
    if(str.length > num){
        var val = str.slice(0, num);
        if(val.length <= 3){
            console.log(val+"...");
        }else{
            console.log(str.slice(0, num-3)+"...");
        }
    }else{
        console.log(str);
    }
}
function mutation(arr) {
    var val = arr[1].toLowerCase().split("");
    var test = arr[0].toLowerCase();
    console.log(val);
    console.log(test);
    for(var i = 0; i < (test.length+1); i++){
        if(test.indexOf(val[val.length-1]) == -1){
            return false;
        }else if(test.indexOf(val[i]) !== -1){
            return true;
        }else{
            return false;
        }
    }
}
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
function destroyer(arr) {
   var args = Array.prototype.slice.call(arguments);
  args.splice(0,1);
  var final = [];
   for(var i = 0; i < arr.length; i++){
       for(var j = 0; j < args.length; j++){
           if(arr[i] == args[j]){
               delete arr[i];
           }
       }
   }
  for(var k = 0; k < arr.length; k++){
      var bool = Boolean(arr[k]);
      if(bool !== false){
          final.push(arr[k]);
      }
  }
  return final;
}
function where(arr, num) {
      var index = arr.length;
      arr = arr.sort(function(a,b) {return a-b; });
      for(var i in arr){
          if(arr[i] >= num){
             return parseInt(i);
          }
      }
      return index;
}
function rot13(str) {
  var val= [];

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      val.push(str.charAt(i));
    } else if (str.charCodeAt(i) > 77) {
      val.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      val.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
  }
  return val.join("");
}
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
function convert(num) {
  var dict = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  var value = '';
  var count;
  for (count in dict) {
    while ( num >= dict[count] ) {
      value += count;
      num -= dict[count];
      console.log(value);
    }
  }
  return value;

}
function where(collection, source) {
    var res = [];
    var key = Object.keys(source);
    for (var name in collection) {
        var j = 0;
        for (n = 0; n < key.length; n++) {
            if (collection[name][key[n]] === source[key[n]]) {
                j = j + 1;
            }
        }
        if (j === key.length) {
            res.push(collection[name]);
        }
    }
    return res;
}
function myReplace(str, before, after) {
    var val;
  var before_splited = before.split("");
  var after_splited = after.split("");
  if(before_splited[0].toUpperCase() === before_splited[0]){
      var uppered = after_splited[0].toUpperCase();
      after_splited.splice(0,1,uppered);
      val = str.replace(before, after_splited.join(""));
     return val;
  }else{
      val = str.replace(before, after);
      return val;
  }
}
function translate(str) {
	// This is the baby step style
    var val = str.split("");
    var vowels = "aeiou".split("");
    var res;
    var test;
    var test2 = [];
    var str_split = str.split(""), test3, word, test4;
    if(vowels.indexOf(str_split[0]) === -1){
        for(var i = 0; i < val.length; i++){
        if(vowels.indexOf(val[i]) !== -1 && val[i] !== vowels[i]){
            res = i;
            break;
        }
    }
    test = str.substr(res);
    test = test.split("");
    for(var j = 0; j < str_split.length; j++){
        if(vowels.indexOf(str_split[j]) === -1){
            if(test2.length === res){
                break;
            }
            test2.push(str_split[j]);
        }
    }
    test3 = test.concat(test2);
    word = "ay".split("");
    test4 = test3.concat(word);
    //console.log(val, vowels, res,test, str_split, test2, test3, test4);
    return test4.join("");
    }else{
        test4 = str.concat("way");
        return test4;
    }
    
}
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
function fearNotLetter(str) {
        var funicode = str.charCodeAt(0),
            lunicode = str.charCodeAt(str.length - 1);
        var res = [];
        for (var i=funicode; i<=lunicode; i++) {
            res.push(String.fromCharCode(i));
        }
        var val = res.join('');
        if ( val === str ) { return undefined; }
        else { return res.filter( function(letter) {
            return str.split('').indexOf(letter) === -1;
        }).join(''); }
    }
function boo(bool) {
  if(bool === parseInt(1)){
    return false;
  }
  else if(bool == Boolean(true) || bool == Boolean(false)){
      return true;
  }else{
      return false;
  }
}
function unite(arr1, arr2, arr3) {
  var res = [];
  for(var i = 0; i < arguments.length; i++){
      arguments[i].map(
          function(val1){
              if(res.indexOf(val1) === -1){
                  res.push(val1);
              }
          }
          );
  }
  return res;
}
function convert(str) {
  var val = str.split("");
  for(var i = 0; i < val.length; i++){
  	if(val[i] == "&"){
  		val[i] = "&amp";
  	}else if(val[i] == "<"){
  		val[i] = "&lt";
  	}else if(val[i] == ">"){
  		val[i] = "&gt";
  	}else if(val[i] == "\""){
  		val[i] = "&quot;";
  	}else if(val[i] == "\'"){
  		val[i] = "&apos;";
  	}
  }
  var res = val.join("");
  return res;
}
function spinalCase(str) {
	str = str.replace(/_/g, "");
	var val = str.toLowerCase().split(" ");
	var holder = [], holder2, res;
	function replacer(match){
		return "-"+match.toLowerCase();
	}
	for(var i = 0; i < val.length; i++){
		if(val.length <= 1){
		 	res = str.replace(/[A-Z]/g, replacer);
		 	var test = res.split("");
		 	if(test[0] == "-"){
		 		holder2 = res.substr(1);
		 		return holder2;
		 	}else{
		 		return res;
		 	}
		}else{
			holder.push(val[i]);
			holder.push("-");
		}
	}
	holder.splice(-1, 1);
	var result = holder.join("");
	return result;
}
// noprotect
function sumPrimes(num){
	var res = [], final = 0;
	function isPrime(val){
		if(num < 2){
			return false;
		}
		for(var i = 2; i < val; i++){
			if(val % i === 0){
				return false;
			}
		}return true;
	}
	for(var j = 2; j <= num; j++){
		if(isPrime(j)){
			res.push(j);
		}
	}
	for(var k = 0; k < res.length; k++){
		final += res[k];
	}
	return final;
}

function smallestCommons(arr) {
  arr = arr.sort(), holder = [], count = 0, mother1 = [], mother2 = [], count = 0;
  for(var i = arr[0]; i <= arr[1]; i++){
  	holder.push(i);
  }
  for(var n = 2; n <= arr[1]; n++){
  	for(var j = 1; j < 2000000; j++){
  		mother1.push(n*j);
  	}
  }
  for(var k = 0; k < 2000000; k++){
  	count = 0;
  	for(var m = 0; m <= holder.length; m++){
  		if(mother1[k] % holder[m] === 0){
  			count++;
  		}
  	}
  	if(count === holder.length){
  			mother2.push(mother1[k]);
  		}
  }
  return mother2[0];
}

function find(arr, func) {
  var value = arr.filter(func);
  return value[0];
}
function drop(arr, func) {
 	var count = arr.length;
 	for(var i = 0; i < count; i++){
 		if(func(arr[0])){
 			break;
 		}else{
 			arr.shift();
 		}
 	}
 	return arr;
}
function steamroller(arr) {
	var res = [], val = [];
	function each(val){ 
		if(!Array.isArray(val)){
			res.push(val);
		}else if(Array.isArray(val)){
			for(var i = 0; i < val.length; i++){
				res.push(val[i]);
				each(val[i]);
			}
			
		}else{
			//return res;
		}
	}
	arr.forEach(each);
	for(var j = 0; j < res.length; j++){
		if(!Array.isArray(res[j]) && val.indexOf(res[j]) === -1){
			val.push(res[j]);
		}
	}
	return val;
}
function binaryAgent(str) {
  var val = str.split(" "), res = [];
  for(var i = 0; i < val.length; i++){
  	res.push(String.fromCharCode(parseInt(val[i], 2)));
  }
 res = res.join("");
 return res;
}
