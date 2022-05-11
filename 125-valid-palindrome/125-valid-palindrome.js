/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const newS = s.replace(/[^A-Za-z0-9]/gm, '').toLowerCase();
    let point1 = newS[0];
    let point2 = newS[newS.length - 1];
    
    for (let i = 0; i < newS.length; i ++) {
        if (point1 !== point2) {
            return false;
        } else {
            point1 = newS[i + 1];
            point2 = newS[newS.length - (i + 2)];
        }
    }
    
    return true;
};