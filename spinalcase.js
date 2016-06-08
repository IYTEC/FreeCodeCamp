/********************************************

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*******************************************/

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
spinalCase('This Is Spinal Tap');
