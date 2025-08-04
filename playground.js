// TIPS
// Number vs BigInt

const sumArray = (arr) => {
    if (arr.length < 2)
        return arr[0];

    return arr[0] + sumArray(arr.slice(1));
}
console.log("Sum array recursive:");
const resultSumArray = sumArray([1, 1, 1, 1, 1]);
console.log(resultSumArray);


const reverseArray = (arr) => {
    if (arr.length === 0)
        return [];

    const lastItem = arr.pop();
    return [lastItem].concat(reverseArray(arr));
}
console.log("Reverse array recursive:");
const resultReverseArray = reverseArray([1, 2, 3]);
console.log(resultReverseArray);


const rotate = (nums, k) => {
    const n = nums.length;
    const result = new Array(n);
    
    for (let i = 0; i < n; i++) {
        result[(i + k) % n] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = result[i];
    }

    return nums;
};
console.log("Rotate array by k:");
const rotateByKResult = rotate([1, 2, 3], 2);
console.log(rotateByKResult);


var plusOne = function(digits) {
    let number = BigInt(digits.join(''));
    const result = number + BigInt(1);
    
    return [...result.toString()].map(Number);
};
console.log("Plus one in the array as a number: ");
// const results = plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);
const plusOneResult = plusOne([1,2,3]);
console.log(plusOneResult);