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
console.log("insertion sort");
console.log(sortedArray); // Output: [1, 2, 4, 5, 8, 9]

// number of shifts
function numberOfShifts(arr) {
  const n = arr.length; 
  let shifts = 0;

  for (let i = 1; i < n; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
      shifts++;
    }

    arr[j + 1] = currentElement;
  }

  return shifts;
}

console.log("number of shifts");
console.log(numberOfShifts([2, 1, 3, 1, 2])); //expected 4