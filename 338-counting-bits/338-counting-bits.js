/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    //We initialize ans with 0 so we don't have to worry about multiplying by zero
    const ans = [0];
    //offset here is the next most important bit... ie [1, 2, 4, 8, 16, 32, ...]
    //Once those important bits are established, we just keep coming back to them over and over
    let offset = 1;
    
    for (let i = 1; i <= n; i ++) {
        //We need to update the offset whenever we reach the next bit tier for this whole thing to work
        if (offset * 2 === i) {
            offset = i;
        }
        //1 + ans[i - offset] will kick us back to the value we've established previously, plus one for hitting the new offset level
        ans.push(1 + ans[i - offset]);
    }
    
    return ans;
};