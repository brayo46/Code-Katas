/*

Program to print an array in Pendulum Arrangement
Write a program to input a list of integers in an array and arrange them in a way similar to the to-and-fro movement of a Pendulum.

The minimum element out of the list of integers, must come in center position of array.
The number in the ascending order next to the minimum, goes to the right, the next higher number goes to the left of minimum number and it continues.
As higher numbers are reached, one goes to one side in a to-and-fro manner similar to that of a Pendulum.
Examples:

Input : 1   3   2   5   4
Output :5   3   1   2   4
Explanation: 
The minimum element is 1, so it is moved to the middle.
The next higher element 2  is moved to the right of the 
middle element while the next higher element 3 is 
moved to the left of the middle element and 
this process is continued.

Input : 11   12   31   14   5
Output :31   12   5   11   14

*/

function Pendulum(arr,n) {

	//sort the array
	var sortArray = arr.sort();

	//new array to store output,carries N elements
	
	var op = [n]; //create new array called op,the ame of elements in array is op[n] 

	//calculate middle index
	var mid = (n-1)/2;

	//storing the minimum element in the middle
	//i is for output array,j is for input array
	var j =1,i=1;
	op[mid] = sortArray[0];

	for (i = 1;i <=mid;i++) {

		op[mid+i] = arr[j++];
		op[mid-i] = arr[j++];
	}

	//adjust when number of elements is even
	if(n%2 == 0) {
		op[mid+i] = arr[j];
	}

	console.log("pendulum arrangement");

	var arr2 = [];

	for(i = 0; i < n; i++) { //oop through length of array(N)
		arr2.push(op[i]);  //append output array elements to arr2
	}

	return arr2;

}

var arr = [1,3,2,5,4];

var n = arr.length

console.log(Pendulum(arr,n));
