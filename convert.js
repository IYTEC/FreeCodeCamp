/***************************************

Convert the given number into a roman numeral.

***************************************/

function convert(num) {
  var dict = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  var value = '';
  var count;
  for (count in dict ) {
    while ( num >= dict[count]) {
      value += count;
      num -= dict[count];
    }
  }
  return value;

}

convert(36);
