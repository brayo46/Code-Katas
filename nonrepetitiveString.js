/*

Shreyansh has been given a string for evaluation by his teacher. He needs to find out whether the given string is non-repetitive or not.
A non-repetitive string is defined as a string which does not contain any different character between 2 same characters (Refer example for explanation).

Input : 
The first line of input contains a single integer T denoting the number of test cases. Each test case contains a string S which consists only of upper-case English alphabets.

Output : 
For each test case, print 1 if the string is non-repetitive, else print 0 in a new line.

Constraints : 
1 <= T <= 200
2 <= Length of String S <= 10^4

Example : 
Input : 
3
AAABCDD
AABBAA
ABCDA

Output : 
1
0
0

Explanation : 
Case 1 : 
AAABCDD
Here no different character is placed between 2 same characters.

Case 2 : 
AABBAA
Here 2 B's are placed between 2 A's, so this is not a non-repetitive string.

Case 3 : 
ABCDA
Here 1 B, 1 C, 1 D are placed between 2 A's, so this is not a non-repetitive string.


ALGORITHM

To find whether a string is non-repetitive or not, do the following :
Take all the simultaneous occurrence of a character and merge it into one.
For example, AAABB will be converted to AB
Now we have the reduced string with us. Iterate through this string and count the frequency of each character.
If the frequency of each character is less than 2, it is a non-repetitive string.

*/

function nonRepetitive(str) {

	var arr = [];

	for(var i = 0; i < str.length-1; i++) {

		if(str[i]!= str[i+1]) {
			arr.push(str[i]);

		}
	}
	arr.push(str[str.length-1]);

	for(var i = 0; i < arr.length;i++) {

		for(var j = arr.length-1; j>i;j--) {
			if(arr[i] == arr[j]) {

				return true
			}
		}
	}

	return false;

}

var str = 'AAABCDD'//'AABBAA'; //AAABCDD
console.log(nonRepetitive(str));













