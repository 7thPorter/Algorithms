/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    //If we work backwards, n is the desired outcome, so we count one step there. Also, we're starting at n-1, so there's one possible step from n-1 to n
    //These are initialized as 1 to represent this
    let pointer1 = 1;
    let pointer2 = 1;
    
    //We'll loop now, starting at n-1, and decreasing until we hit zero
    //The for each loop, we're changing pointer1 to be the sum of pointers 1 and 2, then moving pointer2 to where pointer1 used to be
    //The number of steps increases greatly the more n increases
    for (let i = n-1; i > 0; i--) {
        let tempPointer = pointer1;
        pointer1 = pointer1 + pointer2;
        pointer2 = tempPointer;
    }
    
    //The value being returned is the number of unique one- or two-step steps it takes to reach the end
    return pointer1;
};