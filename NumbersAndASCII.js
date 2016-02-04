//Challenge 14
//Learn about the Numeral Systems (Binary, Octal, Decimal, Hex) and the ASCII table. You can use the CS50 first problem set as a reference (we recommend that you do as much you can from CS50 problem sets)

//1) If we\'re counting in the number system that has base 3, we only can use 0, 1, 2. The first 6 numbers would be:

//0, 1, 2, 10, 11, 12
//Keep counting, what are the next 6 numbers?

//1) convert to base3 numbers.
var convertBase3 = function(val) {
  quo = val;
  res = 0;
  factor = 1;
  do {
    rem = quo % 3;
    res = rem * factor + res;
    factor = factor * 10;
    quo = Math.floor(quo / 3);
  } while (quo !== 0);
  
  return res;
};

var input = [6,7,8,9,10,11];
console.log(input.map(convertBase3));


//2) Write a single chain of JavaScript methods that we can execute on the following ASCII array, to convert it into a sentence.

var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115];

//Two ways to do this 
//First - using reduce
console.log(ascii.reduce((str, ele) => str + String.fromCharCode(ele), ""));

//Second - using map and join
console.log(ascii.map((ele) => String.fromCharCode(ele)).join(""));