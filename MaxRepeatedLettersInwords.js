// Write a JavaScript function that takes a sentence as an argument and determines which word in that sentence has the greatest number of repeated letters 
// (the repeated letters do not have to be consecutive).

// If the sentence has multiple words with the same max of repeated letters, return them all in an Array.

var pass2 = function(res, ch) {
	if (!(ch in res)) {
		res[ch] = 1;
	} else {
		res[ch] += 1;
	} 
  return res;
};

var pass1 = function(str) {
	str = str.split('');
    len = str.length;
    res = str.reduce(pass2, {}); 
	max_freq = 0;
	for (var key in res) {
		if (res[key] > max_freq) {
			max_freq = res[key];
		}
  }
  return max_freq;
} ;

var f1 = function(str) {
	arr = str.split(' ');
	max_freq_arr = arr.map(pass1);
    console.log(max_freq_arr);
	len = max_freq_arr.length;
	max_val = 0;
	res_index = [];
    len = max_freq_arr;
	for (var ii in len ) {
		if (max_freq_arr[ii] > max_val) {
			max_val = max_freq_arr[ii];
			res_index  = [ii];
        } else if (max_freq_arr[ii] === max_val) {
			res_index.push(ii);
		}	
	 }
	
	for (ii = 0; ii < res_index.length; ii++)     {
		console.log(arr[res_index[ii]]);
	}
};
 
 f1("I attribute my success to this: I never gave or took any excuse. Florence Nightingale");