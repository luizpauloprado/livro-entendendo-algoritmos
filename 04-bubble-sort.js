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


const testArray = [64, 34, 25, 12, 22, 11, 90];
const result = bubbleSort(testArray);
console.log(testArray);
console.log(result);