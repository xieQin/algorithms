/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var maxSumAfterPartitioning = function(A, K) {
  let result = []
  for (let i = 0; i < A.length; i ++) {
    let max = A[i]
    result.push(0)
    for (let j = 1; j <= K && i - j + 1 >= 0; j ++) {
      max = Math.max(max, A[i - j + 1])
      if (i - j >= 0) {
        result[i] = Math.max(result[i], result[i - j] + j * max)
      } else {
        result[i] = Math.max(result[i], j * max)
      }
    }
  }
  return result.pop()
};

const A = [1,15,7,9,2,5,10], K = 3

console.log(maxSumAfterPartitioning(A, K))