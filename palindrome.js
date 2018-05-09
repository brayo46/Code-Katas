//check whether string is a palindrome

function isPalindrome(str) {

	var strReverse = str.split().reverse().join('');

	

		
	if(strReverse === str) 
		return "YES"

}

console.log(isPalindrome('I am :IronnorI Ma, i'));
console.log(isPalindrome('Ab?/Ba'))