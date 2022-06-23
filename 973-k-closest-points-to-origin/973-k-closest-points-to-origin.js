/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const combinedArray = [];
    const answerArray = [];
    
    for (let i = 0; i < points.length; i ++) {
        const distance = Math.sqrt((points[i][0] ** 2) + (points[i][1] ** 2));
        combinedArray.push([distance, points[i]]);
    }
    
    combinedArray.sort((a, b) => a[0] - b[0])
    
    while (answerArray.length < k) {
        answerArray.push(combinedArray[0][1]);
        combinedArray.shift();
    }
    
    return answerArray;
};