/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const binaryOutput = n.toString(2);
    let oneCount = 0;
    
    for (let i = 0; i < binaryOutput.length; i ++) {
        if (binaryOutput[i] === "1") {
            oneCount ++;
        }
    }
    
    return oneCount;
};