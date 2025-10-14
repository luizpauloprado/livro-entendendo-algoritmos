const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];

        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
};

const my_list = [1, 3, 5, 7, 9];

console.log("binarySearch 1");
console.log(my_list);
console.log(binarySearch(my_list, 3)); // 1
console.log(binarySearch(my_list, -1)); // null

const binarySearch2 = (arr, value) => {
    let from = 0;
    let to = arr.length - 1;

    while (from <= to) {
        const center = Math.floor ((from + to) / 2);
        if (arr[center] === value) return center;
        else if (arr[center] > value) to = center - 1;
        else from = center + 1;
    }

    return -1;
};

console.log("binarySearch 2");
console.log(my_list);
console.log(binarySearch2(my_list, 3)); // 1
console.log(binarySearch2(my_list, -1)); // null