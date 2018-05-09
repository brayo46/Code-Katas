//function to sort an array using insertion sort

function insertionSort(arr,n) {

	var i, key, j;

	for (var i = 1,i < n; i++) {
		key = arr[i];
		j  = i -1;

		/*
		Move elements of arr[0..i-1], that are greater than key,
		to one position ahead of their current position */

		while(j >= 0 && arr[j] > key) { 
			//when index position is greater than 0 and  last element greater than current element

			arr[j+1] = arr[j]; //move element to one position

			j = j - 1 //decrement index position by 1
		}

		arr[j+1] = key; 

	}
}