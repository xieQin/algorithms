/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!Array.isArray(prices)) {
    return 0
  }
  if (prices.length <= 1) {
    return 0
  }
  let count = 0
  for (let i = 1; i < prices.length; i ++) {
    if (prices[i] > prices[i - 1]) {
      count += prices[i] - prices[i - 1]
    }
  }
  return count
};

const prices = [7,1,5,3,6,4]

console.log(maxProfit(prices))