function insertionSort(arr) {
  const n = arr.length;

  // Start from the second element (index 1) as the first element is considered sorted
  for (let i = 1; i < n; i++) {
    let currentElement = arr[i]; // The element to be inserted
    let j = i - 1; // Index of the last element in the sorted portion

    // Move elements of arr[0..i-1], that are greater than currentElement,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place the currentElement at its correct position in the sorted portion
    arr[j + 1] = currentElement;
  }

  return arr;
}

const unsortedArray = [5, 2, 8, 1, 9, 4];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 4, 5, 8, 9]
