//Find four elements that sum to a given value

/*Algo

1.lFor all elements in array
2.loop throught the first element,second,third and fourth
2.Test if they equal to X,if so print the numbers


Test case
A = [10,20,30,40,1,2];
n = A.length;
X = 91;

first loop

[10,20,30,40] !== 91

second loop

[20,30,40,1] == 91

Print the numbers


other possible test cases(input)

null 
empty array
strings

tips

add error handling
comment code


*/

function findFourElements(A,n,X) {

	//fix the first element and find other three

	for(i=0; i < n-3;i++) {


		//fix the second element and find other two
		for(j = i + 1;j < n-2; j++) {

			//fix the third element and find the fourth
			for(k =j+1; k < n -1;k++) {

				//find the fourth
				for(l= k+1; l < n; l++) {

					if(A[i]+A[j]+A[k]+A[l] == X) {
						console.log(A[i] + " " + A[j] + " " +A[k] + " "+ A[l]);
					}
				}
			}

		}
	}
}
A = [10,20,30,40,1,2];
n = A.length;
X = 91;

console.log(findFourElements(A,n,X));


