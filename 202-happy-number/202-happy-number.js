/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n, sumArray = []) {
    const numArray = n.toString().split('');
    let sum = 0;
    
    if (n === 1) {
        return true;
    } else if (sumArray.includes(n)) {
        return false;
    }
    
    sumArray.push(n);
    
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i] ** 2;
    }
    
    return isHappy(sum, sumArray);
};