const countdown = (i) => {
  console.log(i);
  // base case
  if (i <= 0) return;
  countdown(i - 1);
}

console.log("Countdown")
countdown(5);

const fact = (x) => {
  if (x === 0) return 1;
  return x * fact(x - 1);
}

console.log("Factorial of 5")
console.log(fact(5));

const sumRecursive = (arr = []) => {
  if (!arr.length) return 0;
  return arr[0] + sumRecursive(arr.slice(1));
};

console.log("Sum recursive [1, 2, 3, 4]")
console.log(sumRecursive([1, 2, 3, 4])); // 10

const count = (array) => {
  if (array.length === 0) return 0;
  return 1 + count(array.slice(1));
}

console.log("Count recursive [0, 1, 2, 3, 4, 5]")
console.log(count([0, 1, 2, 3, 4, 5])); // 6


const max = (array) => {
  if (array.length === 2) {
    return array[0] > array[1] ? array[0] : array[1];
  } 
  
  let sub_max = max(array.slice(1));
  return array[0] > sub_max ? array[0] : sub_max;
}

console.log("Max recursive [1, 5, 10, 25, 16, 1]")
console.log(max([1, 5, 10, 25, 16, 1])); // 25