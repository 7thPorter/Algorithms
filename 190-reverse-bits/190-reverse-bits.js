/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const bitArray = n.toString(2).split('');
    
    while (bitArray.length < 32) {
        bitArray.unshift('0');
    }
    
    return parseInt(bitArray.reverse().join(''), 2);
    // return ~n
};