const binaryToNumber = (value) => {
  const counter = [];

  for (let n = value.length - 1; n >= 0; n--) {
    counter.push(n);
  }

  let result = 0;

  for (let n = 0; n < value.length; n++) {
    result += value[n] * 2 ** counter[n];
  }

  return result;
};

console.log(binaryToNumber("1011")); // result: 11
console.log(binaryToNumber("101101")); // result: 45
console.log(binaryToNumber("10011011")); // result: 155