// number of shifts
// using: insertion sort
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

console.log("number of shifts (using insertion sort)");
console.log(numberOfShifts([2, 1, 3, 1, 2])); //expected 4

// find the mediam
function findMedian(arr) {
  // Sort the array in ascending order
  const sorted = [...arr].sort((a, b) => a - b);

  // Find the middle index
  const middleIndex = Math.floor(sorted.length / 2);

  // Return the middle element
  return sorted[middleIndex];
}

console.log("find the median");
console.log(findMedian([0, 1, 2, 4, 6, 5, 3])); //expected 4

// find closest numbers
function closestNumbers(arr) {
  // Sort the array in ascending order
  const sorted = [...arr].sort((a, b) => a - b);

  // Find the minimum difference between consecutive elements
  let minDiff = Infinity;
  for (let i = 0; i < sorted.length - 1; i++) {
    const current = sorted[i];
    const next = sorted[i + 1];
    const diff = next - current;

    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  // Collect all pairs with the minimum difference
  const result = [];
  for (let i = 0; i < sorted.length - 1; i++) {
    const current = sorted[i];
    const next = sorted[i + 1];

    if (next - current === minDiff) {
      result.push(current, next);
    }
  }

  return result;
}

console.log("closest numbers");
console.log(closestNumbers([5,2,3,4,1])); // result [1, 2, 2, 3, 3, 4, 4, 5]