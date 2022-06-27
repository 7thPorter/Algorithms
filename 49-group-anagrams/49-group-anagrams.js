/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const anagrams = {};
    
    for (let i = 0; i < strs.length; i ++) {
        const letters = Array(26).fill(0);
        
        for (let j = 0; j < strs[i].length; j ++) {
            // This line is the key to the whole thing.
            // We've initialized the letters array to a bunch of zeroes, then we check the ascii value of each index of strs[i] against the ascii value of "a"
            // If the index value is a lowercase "a", it will evaluate to 97 - 97, meaning "a" is index 0 of the letters array, and it goes up from there
            // This line increases to value of the appropriate index by 1, so that it tracks exactly how many letters are in each string, regardless of order
            letters[strs[i].charCodeAt(j) - 97] += 1;
        }
        
        if (anagrams[letters]) {
            anagrams[letters].push(strs[i]);
        } else {
            anagrams[letters] = [strs[i]]
        }
    }
    
    return Object.values(anagrams);
};