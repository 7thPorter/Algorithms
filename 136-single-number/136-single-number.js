/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    const numList = {};
    
    for (let i = 0; i < nums.length; i ++) {
        if (numList[nums[i]]) {
            numList[nums[i]] = 2;
        } else {
            numList[nums[i]] = 1;
        }
    }
    for (let key in numList) {
        if (numList[key] === 1) {
            return key;
        }
    }
};