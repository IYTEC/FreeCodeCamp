/**************************************

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

****************************************/

function translate(str) {
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

translate("consonant");
