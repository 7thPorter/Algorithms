/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
    const numberObject = {};
    const answerArray = [];
    
    for (let i = 0; i < nums.length; i ++) {
        if (!numberObject[nums[i]]) {
            numberObject[nums[i]] = 1;
        } else {
            numberObject[nums[i]] ++;
        }
    }
    
    const entries = Object.entries(numberObject);
    entries.sort((a, b) => a[1] - b[1]).forEach((entry) => answerArray.push(Number(entry[0])));
    
    return answerArray.slice(-k);
};