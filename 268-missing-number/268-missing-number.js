/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    
    for (let i = 0; i < sortedNums.length; i ++) {
        if (sortedNums[0] !== 0) return 0;
        if (sortedNums[i] !== sortedNums[i + 1] - 1) return sortedNums[i] + 1;
    }
};