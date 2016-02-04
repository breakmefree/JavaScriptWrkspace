//A palindromic word is a word that reads the same way forward and backwards (i.e. racecar, reviver, rotator).

//Inputs an array of string argument and returns an array of true/false values that map to whether the word in that position is palindrome or not.
var chkpalind = function(sval) {
    return sval === sval.split("").reverse().join();
}

var pali = ["racecar", "sdfasaf",  "reviver", "rotator"];
var palindrome = pali.map(chkpalind);
console.log(palindrome);