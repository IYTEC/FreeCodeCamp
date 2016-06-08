/*************************************

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*************************************/

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
fearNotLetter("abce");
