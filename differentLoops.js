// Use a variety of different solutions to find the largest number in an array. 
// Use a while loop, a do..while loop, a for loop, and a forEach loop. Use the following array for each of these loops:
var nArr = [2, 7, 4, 8, 6, 4];
var maxWhile = function(arr) {
  var i = 0;
  var max = arr[i++];
  while (i < arr.length) {
  	if(arr[i] > max) {
      max = arr[i];
    }
    i++;
  }
  return max;
}
console.log("1.1 - While-Loop -->> Max: " + maxWhile(nArr));

//do..while loop
var maxDoWhile = function(doarr) {
  var i = 0;
  var max = - Infinity;
  do {
    if(doarr[i] > max) {
      max = doarr[i];
    }
    i += 1;
  } while (i < doarr.length);
  return max;
}
console.log("1.2 - Do-While-Loop -->> Max: " + maxDoWhile(nArr));

//for loop
var maxFor = function(arrfor) {
  var i = 0;
  var max = arrfor[i++];
  for (; i < arrfor.length; i++) {
    if(arrfor[i] > max) {
      max = arrfor[i];
    }
  }
  return max;
}
console.log("1.3 - For-Loop -->> Max: " + maxFor(nArr));

//forEach loop
var maxForEach = function(arrfe) {
  var max = -Infinity;
  arrfe.forEach(function(arr){
  	if(arr > max) {
  		max = arr;
  	}
  });
  return max;
}
console.log("1.4 - ForEach-Loop -->> Max: " + maxForEach(nArr));

//Using a for...in loop, console.log all of the keys and values in the following object:
var dict = { "wheels": 3, "horsepower": 600, "decal": "flames", "awesome": true , "holdsBarred": [] }
for(var key in dict) {
	console.log(key + " : " + dict[key]);
}

//Using the .map function return an array that is equal to the squares each of the values in the following array:
var squares = function(numArr) {
	return numArr.map(function(number) {
		return number * number;
	});
}
var num = [1, 2, 5, 7, 11];
console.log("3 - Array of squares: " + squares(num));

//Using the .reduce function find the product of the numbers in the following array:
var reduce = function(arrayN) {
	return arrayN.reduce(function(product, ele){
		return product * ele;
	}, 1);
}
var intArr = [3, 5, 7, 9, 12];
console.log("4 - Reduced to product: " + reduce(intArr))

//Using the .filter function create a new array of only odd numbers from the following array:
var oddFilter = function(anum) {
	return (anum % 2 == 0 ? false : true);
}
var oddArr = [1, 22, 35, 2, 4, 7, 9];
var odd = oddArr.filter(oddFilter);
console.log("5 - Array of odd numbers: " + odd);

//Using the .sort function, sort the following array reverse-alphabetically:
var strArr = ['water', 'balloon', 'baseball', 'computer', 'notebook', 'frisbee'];
console.log("6 - Array of strings reverse-alphabetically: " + strArr.reverse());