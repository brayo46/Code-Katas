/*

Given an array arr[], find the maximum j – i such that arr[j] > arr[i]
Given an array arr[], find the maximum j – i such that arr[j] > arr[i].

Examples:

  Input: {34, 8, 10, 3, 2, 80, 30, 33, 1}
  Output: 6  (j = 7, i = 1)

  Input: {9, 2, 3, 4, 5, 6, 7, 8, 18, 0}
  Output: 8 ( j = 8, i = 0)

  Input:  {1, 2, 3, 4, 5, 6}
  Output: 5  (j = 5, i = 0)

  Input:  {6, 5, 4, 3, 2, 1}
  Output: -1 





*/

//Ineffiecient solution.Time complexity = O(n^2)


function maxIndexDiff(arr,n) {

	var maxDiff = -1;
	var i,j;

	for (i =0; i  < n; i++) {

		for(j = n-1; j > i;j--) {

			if(arr[j] > arr[i] && maxDiff < (j - i)) {
				maxDiff = j - i;
			}
		}
	}

	return maxDiff;
}

var arr = [9, 2, 3, 4, 5, 6, 7, 8, 18, 0];
var n = arr.length;

console.log(maxIndexDiff(arr,n));



//Efficient solution


















