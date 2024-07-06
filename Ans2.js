function twoSum(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(nums[i], i);
    }

    return null;
}

console.log(twoSum([1, 5, 2, 7], 8));
console.log(twoSum([20, 1, 5, 2, 11], 3));
console.log(twoSum([3, 2, 4], 6));
