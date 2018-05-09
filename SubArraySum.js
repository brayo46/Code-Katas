/*
Given an unsorted array of non-negative integers, find a continuous sub-array which adds to a given number.

Input:

The first line of input contains an integer T denoting the number of test cases. Then T test cases follow. Each test case consists of two lines. The first line of each test case is N and S, where N is the size of array and S is the sum. The second line of each test case contains N space separated integers denoting the array elements.

Output:

Corresponding to each test case, in a new line, print the starting and ending positions of first such occuring subarray if sum equals to subarray, else print -1.

Note: Position of 1st element of the array should be considered as 1.

Expected Time Complexity: O(n)

Constraints:
1 ≤ T ≤ 100
1 ≤ N ≤ 100
1 ≤ an array element ≤ 200

Example:

Input:
2
5 12
1 2 3 7 5
10 15
1 2 3 4 5 6 7 8 9 10

Output:
2 4
1 5

Explanation : 
In first test case, sum of elements from 2nd position to 4th position is 12
In second test case, sum of elements from 1st position to 5th position is 15


*/

//method

/*

find two elements that add up to a given sum
print their index positions
find a sub array that adds up to a given sum,print its range..i.e starting index position and last


*/

/*An efficient proram to print subarray with sum as given sum


Returns true if there is a subarray of arr[] with sum equal to sum
otherwise returns false.Also prints the result */

function subArraySum(arr,n,sum) {

	//initialise curr_sum as value of first element and starting point as 0

	var curr_sum = arr[0]
	var start = 0, i

	/*Add elements one by one to curr_sum  and curr_sum excedds
	the sum,then remove the starting element */

	for (i = 1; i<= n; i++) {

		//If curr_sum exceeds sum,then remove the starting elements
		while(curr_sum > sum && start < i-1) {
			curr_sum = curr_sum - arr[start];
			start++
		}

		//if  curr_sum becomes equal to sum,then return true
		if(curr_sum == sum) {
			console.log("Sum found between indexes %d and %d",start, i-1);
			return true;
		}

		//Add this element to curr_sum
		if(i < n) {
			curr_sum = curr_sum + arr[i];
		}
		

	}
	//if we reach here,there is no sub array
	console.log("No sub array found");
	return 0;
}


arr = [15,2,4,8,9,10,23];
n =   arr.length;
sum = 23;

console.log(subArraySum(arr,n,sum))