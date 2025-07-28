const findSmallest = (arr, smallest = arr[0], smallestIndex = 0, i = 1) => {
  if (arr.length <= i) return smallestIndex;
  const curr = arr[i];
  if (curr < smallest) {
    smallest = curr;
    smallestIndex = i;
  }
  return findSmallest(arr, smallest, smallestIndex, i + 1);
};

const selectionSort = (arr, result = []) => {
  if (arr.length > 0) {
    const smallestIndex = findSmallest(arr);
    const smallest = arr.splice(smallestIndex, 1)[0];
    result.push(smallest);
    return selectionSort(arr, result);
  }
  return result;
};

const arr = [5, 3, 6, 2, 10];
console.log(selectionSort(arr));