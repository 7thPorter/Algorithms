/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    const newS = s.split('').sort();
    const newT = t.split('').sort();
    
    if (s.length !== t.length) {
        return false;
    }
    
    for (let i = 0; i < s.length; i ++) {
        if (newS[i] !== newT[i]) {
            return false;
        }
    }
    return true;
};