/*


Given an array of integers check whether there are two numbers present with given product.

Input:

The first line of input contains an integer T denoting the number of test cases.
The first line of each test case is N and a product p.
The second line of each test case contain N number of a[].

Output:
Print Yes if two numbers product is equal to p else No.

Constraints:

1 ≤ T ≤ 100
1 ≤ N ≤ 200
0 ≤ a[] ≤ 1000
1 ≤ pro ≤ 2000000

Example:

Input:

2

5 2

1 2 3 4 5

8 46

5 7 9 22 15 344 92 8

Output:

Yes

No


*/

function findProduct(N,arr,p) {
	var output = [];

	for (var i = 0; i<=N; i++) {
		if(arr[i] * arr[i]+1 == p) {
			output.push('yes');
		}
		else {

		}
	}

	if (output.indexOf('yes') > -1) {
		return "Yes"
	}else {
		return "No"
	}
}


var N  = 5
var arr = [1,2,3,4,5];
var p = 2

console.log(findProduct(N,arr,p));

var N  = 8
var arr = [5,7,9,22,15,344,92,8];
var p = 46

console.log(findProduct(N,arr,p));