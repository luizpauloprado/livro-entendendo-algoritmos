const quicksort = (array) => {
	// base case, arrays with 0 or 1 element are already "sorted"
	if (array.length < 2) return array;
	// recursive case
	let pivot = array[0];
	// sub-array of all the elements less than the pivot
	let less = array.slice(1).filter((el) => {
		return el <= pivot;
	});
	// sub-array of all the elements greater than the pivot
	let greater = array.slice(1).filter((el) => {
		return el > pivot;
	});
	return quicksort(less).concat(pivot, quicksort(greater));
}

console.log("Quick sort for [10, 5, 2, 3]")
console.log(quicksort([10, 5, 2, 3]));

