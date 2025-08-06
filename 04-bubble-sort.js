function bubbleSort(arr) {
    const n = arr.length;
    const sortedArray = [...arr];
    
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        
        // Last i elements are already sorted
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
                swapped = true;
            }
        }
        
        // If no swapping occurred, array is sorted
        if (!swapped) break;
    }
    
    return sortedArray;
}


function bubbleSortUsingWhile(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      // Compare adjacent elements
      if (arr[i] > arr[i + 1]) {
        // Swap them if they are in the wrong order
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true; // Indicate that a swap occurred
      }
    }
    // After each pass, the largest unsorted element is at its correct position
    // So, we can reduce the comparison range for the next pass
    n--; 
  } while (swapped); // Continue as long as swaps are happening

  return arr;
}

const testArray = [64, 34, 25, 12, 22, 11, 90];
const result = bubbleSort(testArray);
console.log(testArray);
console.log(result);