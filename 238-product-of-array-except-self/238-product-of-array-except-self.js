/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    const answer = Array(nums.length).fill(1);
    let prefix = 1;
    let postfix = 1;
    
    for (let i = 0; i < nums.length; i ++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }
    
    for (let i = nums.length - 1; i > -1; i --) {
        answer[i] *= postfix;
        postfix *= nums[i];
    }
    
    return answer;
};