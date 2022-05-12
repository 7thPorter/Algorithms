/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let totalProfit = 0;
    let purchasePrice = Infinity;
    
    for (let i = 0; i < prices.length; i ++) {
        if (purchasePrice > prices[i]) {
            purchasePrice = prices[i];
        }
        if (i <= prices.length - 1) {
            if (prices[i] - purchasePrice > totalProfit) {
                totalProfit = prices[i] - purchasePrice;
            }
        }
    }
    return totalProfit;
};