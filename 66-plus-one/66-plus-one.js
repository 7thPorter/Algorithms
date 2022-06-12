/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const newDigits = digits
    
    for (let i = newDigits.length - 1; i >= 0; i --) {
        if (newDigits[i] === 9) {
            newDigits[i] = 0;
            if (i === 0) {
                newDigits.unshift(1);
            }
        } else {
            newDigits[i] += 1;
            break;
        }
    }
    
    return newDigits;
};