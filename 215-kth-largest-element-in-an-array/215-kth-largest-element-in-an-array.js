/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
    let largerElements = 0;
    let currentElement = null;
    
    nums.sort((a, b) => a - b);
   
    for (let i = nums.length - 1; i >= 0; i --) {
        if (largerElements === k - 1) {
            return nums[i];
        }

        largerElements ++;
    }
}