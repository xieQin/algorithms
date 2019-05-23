/**
 * 最大子数组
 * @param {array} A
 * @param {number} low
 * @param {number} high
 */
const maxSubArray = (A, low, high) => {
  if (low == high) {
    return {
      low: low,
      high: high,
      sum: A[low]
    }
  } else {
    let mid = Math.floor((low + high) / 2)
    let leftRes = maxSubArray(A, low, mid)
    let rightRes = maxSubArray(A, mid + 1, high)
    let crossRes = findMaxCrossSubArray(A, low, mid, high)
    if (leftRes.sum >= rightRes.sum && leftRes.sum >= crossRes.sum) {
      return leftRes
    } else if (rightRes.sum >= leftRes.sum && rightRes.sum >= crossRes.sum) {
      return rightRes
    } else {
      return crossRes
    }
  }
}

/**
 * 查找跨越中点的最大子数组
 * @param {array} A
 * @param {number} low
 * @param {number} mid
 * @param {number} high
 */
const findMaxCrossSubArray = (A, low, mid, high) => {
  let leftSum = - Infinity, righSum = - Infinity, sum = 0, maxLeft = mid, maxRight = mid
  for (let i = mid; i >= low; i --) {
    sum += A[i]
    if (sum > leftSum) {
      leftSum = sum
      maxLeft = i
    }
  }
  sum = 0
  for (let i = mid + 1; i <= high; i++ ) {
    sum += A[i]
    if (sum > righSum) {
      righSum = sum
      maxRight = i
    }
  }
  return {
    low: maxLeft,
    right: maxRight,
    sum: leftSum + righSum
  }
}

let A = [1, 2, -2, 7, -1, 3, -11, 3, 4, -1, 12, -9, 9, 8, 6, -12, -4, 5, 3, 5, -2, -9, 8, 2]

console.log(maxSubArray(A, 0, A.length - 1))