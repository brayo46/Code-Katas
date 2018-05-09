/*

ALGO

find distinct members in the array

1.remove duplicates in the array
2.Append unique elements to an array
3.Sort the array afterwards

*/


function singles(array) {
	var result = [];

	//create a map from value -> count(value)
	var counts = array.reduce(function(o, k) {

		o[k] = o[k] ? o[k] + 1: 1; //if element already exists in array,increment its count,else assign it a value of 1

		return o; // return o array
	}, {});

	//find those that nly appeared once
	return Object.keys(counts).filter(function(k) {
		return (counts[k] == 1);
	});
}

var arr = [1,2,4,3,5,1,2];
console.log(singles(arr));













/*

//Return unique characters in the array

function findDistinct(arr) {

	var seen = {};
	var out = [];

	var len = arr.length;
	var j = 0;

	for( var i = 0; i < len; i++) {
		var item = arr[i];
		if(seen[item] !== 1) { //if array item is not available

			seen[item] = 1; //make it available
			out[j++] = item; //add item to out array


		}
	}

	return out.sort();
}


var arr = [1,2,4,3,1,2];
console.log(findDistinct(arr));
*/

