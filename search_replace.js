/***********************************************

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

************************************************/

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

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
