// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
// return the minimum integer common to both arrays. 
// If there is no common integer amongst nums1 and nums2, return -1.
var getCommon = function(nums1, nums2) {
    let index1 = 0;
    let index2 = 0;

    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] === nums2[index2]) {
            return nums1[index1];
        }

        if (nums1[index1] < nums2[index2]) {
            index1++;
        } else {
            index2++;
        }
    }

    return -1;
};

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
var twoSum = function(nums, target) {
    let positions = [];
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                const sum = nums[i] + nums[j];
                if (sum === target) {
                    positions = [i,j];
                }
            } 
        }
    }
    
    return positions;
};

function twoSumUsingMap(nums, target) {
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;
        
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        numMap.set(currentNum, i);
    }
    
    return [];
}
