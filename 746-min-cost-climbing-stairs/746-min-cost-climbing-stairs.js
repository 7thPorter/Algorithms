/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function(cost) {
    //We're going to loop through the array in reverse, starting from the third-to-last element
    //If there are only two elements, this for loop is skipped because it only runs while i is zero or more
    //For each iteration, we add the lowest of the next or next-next element, replacing the current element with the sum
    //This way, we KNOW that step contains the lowest-summed path to the end
    for (let i = cost.length - 3; i >= 0; i --) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    }
    
    //Returning the lowest of the first two elements works for 2-element arrays, as well as the minimum sums for larger arrays
    return Math.min(cost[0], cost[1]);
};