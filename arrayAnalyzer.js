// Write a javascript function that takes multiple arguments that are all integers and calculates the following:

// Count of odd integers
// Count of negative integers
// The average of all integers (round to 2 decimal)
// The median of all integers
// The function should return these values in an object.

var arrayAnalyzer = function() {
  var odd = 0, negative = 0, average = 0, median = null;
  var numArr = [];
  for (var i = 0; i < arguments.length; i++) {
    numArr.push(arguments[i]);
    if(arguments[i] % 2 == 0) { odd += 1; }
    if(arguments[i] < 0) { negative += 1; }
    average += arguments[i];
  }   
  average /= numArr.length;
  console.log(numArr);
    
  var arrsort = numArr.sort(function(a, b){return a-b});
  console.log(arrsort);
  var size = Math.floor(numArr.length/2);
  if(numArr.length % 2 ==0) {
    median = (arrsort[size -1] + arrsort[size])/2;
  } else {
    median = arrsort[size]/2;
  }

  var arrAnalyze = {};
  
  arrAnalyze['odds'] = odd;
  arrAnalyze['negatives'] = negative;
  arrAnalyze['avg'] = average.toFixed(2);
  arrAnalyze['median'] = median;

  return arrAnalyze;
}

console.log(arrayAnalyzer(7, -3, 0, 12, 44, -5, 3));