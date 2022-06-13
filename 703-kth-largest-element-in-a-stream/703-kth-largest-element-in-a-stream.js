/**
 * @param {number} k
 * @param {number[]} nums
 */
//Biggest thing here is remembering how to create a class. you create the variable, then set it equal to class {}, and the inputs go inside the constructor
const KthLargest = class {
    constructor(k, nums) {
        this.interval = k;
        this.array = nums.sort((a, b) => a - b);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.array.push(val);
    this.array.sort((a, b) => a - b);
    
    return this.array[this.array.length - this.interval];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */