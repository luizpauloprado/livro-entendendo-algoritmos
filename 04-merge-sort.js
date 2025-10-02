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

console.log(merge([3,4,22], [1, 2, 44]));