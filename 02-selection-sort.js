const findSmallest = (arr) => {
  // let [smallestElement] = arr;
  let smallestElement = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    const el = arr[i];
    if (el >= smallestElement) continue;
    smallestElement = el;
    smallestIndex = i;
  }
  return smallestIndex;
};

const selectionSort = (arr) => {
  const size = arr.length;
  const result = new Array(size).fill(0);
  for (let i = 0; i < size; i++) {
    const smallestIndex = findSmallest(arr);
    const smallestElement = arr.splice(smallestIndex, 1)[0];
    result[i] = smallestElement;
  }
  return result;
};

const sourceArray = [5, 3, 6, 2, 10];
console.log('Source array - ', sourceArray); // [5, 3, 6, 2, 10]

const sortedArray = selectionSort(sourceArray);
console.log('New sorted array - ', sortedArray); // [2, 3, 5, 6, 10]