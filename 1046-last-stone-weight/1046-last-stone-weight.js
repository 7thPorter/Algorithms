/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const bagOfStones = stones.sort((a, b) => a - b);
    
    while (bagOfStones.length > 1) {
        let heavier = bagOfStones[bagOfStones.length - 1];
        let lighter = bagOfStones[bagOfStones.length - 2];
        bagOfStones.splice(-2, 2);
        
        if (heavier > lighter) {
            heavier = heavier - lighter;
            bagOfStones.push(heavier);
            bagOfStones.sort((a, b) => a - b);
        }
    }
    
    if (bagOfStones.length) {
        return bagOfStones[0];
    } else {
        return 0;
    }
};