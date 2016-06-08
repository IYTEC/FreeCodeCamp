/***********************************

Flatten a nested array. You must account for varying levels of nesting.

************************************/

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
steamroller([1, [2], [3, [[4]]]]);
