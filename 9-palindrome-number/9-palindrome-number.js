/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    const xArray = x.toString().toLowerCase().split('');
    const rArray = xArray.slice().reverse();
    
    for (i = 0; i < xArray.length; i ++) {
        if (xArray[i] !== rArray[i]) {
            return false;
        }
    }
    
    return true;
};