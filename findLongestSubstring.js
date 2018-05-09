/*

Giving a dictionary and a string ‘str’, your task is to find the longest string in dictionary of size x which can be formed by deleting some characters of the given ‘str’.

Examples:

Input : dict = {"ale", "apple", "monkey", "plea"}   
        str = "abpcplea"  
Output : plea 

Input  : dict = {"pintu", "geeksfor", "geeksgeeks", 
                                        " forgeek"} 
         str = "geeksforgeeks"
Output : geeksgeeks


Input:
The first line of input contains an integer T denoting the no of test cases . 
Then T test cases follow. Each test case contains an integer x denoting the no of words in the dictionary.
 Then in the next line are x space separated strings denoting the contents of the dictionary. 
  Then in the next line is a string 'str'.

Output:
For each test case in a new line print the required output.

Constraints:
1<=T<=100
1<=x, length of str<=1000

Example:
Input:
2
4
ale apple monkey plea
bpcplea
4
pintu geeksfor geeksgeeks forgeek
geeksforgeeks

Output:
plea
geeksgeeks
 


*/

/*

ALGO

1.loop through the array of strings
2.for every string,compare to Xstring to find if array string is a substring of Xstring
3.if so add it to new array called ArraySub
4.Loop through ArraySub..if length is 0 = no substring,if length  = 1,print object.
5.Else compare strings and return longest string

*/

function FindLongestSubstr(dict,str) {
	var result = "";
	length = 0;


	for (var word in dict) {
		if(dict.hasOwnProperty(word)) {

			if(length < word.length && str.indexOf(word) !== 1){

				result = word;
				length = word.length;
			}


		}
		


	}
	//Return longest string
	return result;

	
	
}

dict = {"plea"}   
str = "abpcplea"
console.log(FindLongestSubstr(dict,str)); 