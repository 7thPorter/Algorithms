/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let tempMatrix = [];
    
    
    while (tempMatrix.length < matrix.length) {
        let tempArray = [];
        for (let i = 0; i < matrix.length; i ++) {
            tempArray.unshift(matrix[i][matrix[i].length - 1]);
            matrix[i].pop();
        }
        tempMatrix.unshift(tempArray);
    }
    
    while (matrix.length) {
        matrix.pop();
    }
    
    while (tempMatrix.length) {
        matrix.push(tempMatrix.shift());
    }
};