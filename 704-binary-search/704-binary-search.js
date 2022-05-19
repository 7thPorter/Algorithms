/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target, index = 0) {
    let newNums = nums;
    const half = Math.round(nums.length / 2);
    
    if (nums.length <= 1) {
        if (nums[0] === target) {
            return 0;
        } else {
            return -1;
        }
    }
    
    if (target < nums[half]) {
        return search(nums.slice(0, half), target, index);
    }
    
    index += half;
    
    if (target > nums[half]) {
        return search(nums.slice(half), target, index);
    } else if (target === nums[half]) {
        return index;
    }
};