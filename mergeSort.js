//Implement a merge sort algorithm on an array

//merges two arrays of arr[]
//First subarray is arr[l..m]
//Second subarray is arr[m+1..r]

function merge(arr,l,m,r) {


	var i,j,k
	var n1 = m - l+1; //get length of left portion of array
	var n2 = r - m;   //get length of right portion of array

	//create temp arrays
	var L = [];
	var R = [];

	//copy data into temp arrays
	for (i = 0; i < n1; i++) {
		L[i] = arr[l + i];
	}

	for (j = 0; j < n2; j++) {
		R[j] = arr[m + 1 + j];
	}

	//merge the temp arrays back into arr[l..r]
	i = 0; //initial index of first subarray
	j = 0; //initial index of second subarray
	k = l; //initial index of merged subarray

	while (i < n1 && j < n2) {

		if(L[i] <= R[j]) {
			arr[k] = L[i];
			i++;
		}else {

			arr[k] = R[j];
			j++;
		}
		k++;

	}

	//copy the remaining elements of L[], if there are any
	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;

	}

	//copy the remaining elements of R[] if there are any
	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
}

//l is for left index and r is right index of the sub array of arr to be sorted

function mergeSort(arr,l,r) {

	if(l < r) {

		//same as (l+r)/2 but avoids overflow for large l and h
		var m = l+(r-1)/2;

		//sort first and second halves
		mergeSort(arr,l,m);
		mergeSort(arr, m+1, r);

		merge(arr, l, m, r);
	}
}


arr = [12, 11, 13, 5, 6, 7];

console.log(mergeSort(arr, 0, arr.length - 1))