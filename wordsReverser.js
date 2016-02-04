// It takes an input string - one argument that is a sentence (multiple words) and 
// returns a new sentence where all words are reversed but kept in the same order as the original sentence.

var isAlphaNumeric = function(ch) {
    if ((ch >= 'a' && ch <= 'z') ||
        (ch >= 'A' && ch <= 'Z') ||
        (ch >= 0 && ch <= 9)) {
            return true;
        }
    return false;
}    

var reverse = function(str) {
    var i = 0;
    while (isAlphaNumeric(str[i])) {
        i++;
    }
    str1 = str.substr(0,i);
    str2 = str.substr(i, str.length);
    str1 = str1.split('').reverse().join('')
    return str1+str2
}

var wordsReverser = function(str) {
    return str.split(" ").map(reverse).join(' ');
}
console.log(wordsReverser("This  fun, I must say."));