function merge(leftArr, rightArr) {
  let sortedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and add the smaller one to sortedArr
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      sortedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      sortedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Add any remaining elements from the left array
  while (leftIndex < leftArr.length) {
    sortedArr.push(leftArr[leftIndex]);
    leftIndex++;
  }

  // Add any remaining elements from the right array
  while (rightIndex < rightArr.length) {
    sortedArr.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return sortedArr;
}

console.log("merge");
console.log(merge([3, 4, 22], [1, 2, 44]));

function mergeSort(arr) {
  // Base case: if the array has 0 or 1 element, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  // Recursively sort the two halves and then merge them
  const sortedLeft = mergeSort(leftArr);
  const sortedRight = mergeSort(rightArr);

  return merge(sortedLeft, sortedRight);
}

console.log("merge sort");
console.log(mergeSort([3, 4, 22, 1, 2, 44]));