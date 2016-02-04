//Write a JavaScript function that would swap the case of each character in the string you pass to it as an argument.

var swapCase = function(strs) {
  var newStr = "";
  for (var i = 0; i < strs.length; i++) {
    console.log(strs[i]);
    if (strs[i] == strs[i].toUpperCase()) {
      newStr += strs[i].toLowerCase();
    } else {
      newStr += strs[i].toUpperCase();
    }
  }
  return newStr
}
console.log(swapCase("Life is 10% what happens to you, and 90% of how you REACT to it"));