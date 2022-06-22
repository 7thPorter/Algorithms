/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function(a, b) {
    // Since we can't add directly, we're going to have to use bitwise operations
    // The base case (b !== 0) is checking whether there is any carry over (like we'd have in addition)
    // If there aren't any more carried numbers, we'll consider the addition to be complete
    while (b) {
        // We first set up a temporary variable holding the value of a compared with b using the bitwise AND (&) operand, then bitshifted to the left by one bit
        // This bascially looks for if there's going to be any carried bits, which we'll apply after doing the XOR (^) operand
        let shift = (a & b) << 1;
        // The XOR here takes the value wherever there is only one bit in the spot of either input, but not both
        // This simulates the answer part of doing addition manually, when you write the "ones" place of the added numbers beneath the line
        a = a ^ b;
        //The AND here gives us the carried bits because it marks any time the two equivalent bits of both inputs are equal to 1
        // This simulates carrying the "tens" digit in manual addition because the bitshift (<<) operand moves the "carried" bit over to the left by one bit
        b = shift;
    }
    // Since we're replacing the actual inputs with the bitwise operations, we can just return a.
    return a;
};