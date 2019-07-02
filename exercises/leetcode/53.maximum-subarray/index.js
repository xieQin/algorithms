/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let current = nums[0], max = nums[0]
  for (let i = 1; i < nums.length; i ++) {
    current = Math.max(nums[i], current + nums[i])
    max = Math.max(current, max)
  }
  return max
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray2 = function(nums) {
  if (Array.isArray(nums) && nums.length > 1) {
    return mergeMaxSubArray(nums, 0, nums.length - 1)
  }
  return

};

var mergeMaxSubArray = function(nums, start, end) {
  if (end <= start) {
    return nums[start]
  }
  let middle = Math.floor((start + end) / 2)
  let m = middle - 1, n = middle + 1
  let leftResult = mergeMaxSubArray(nums, start, m)
  let rightResult = mergeMaxSubArray(nums, n, end)
  let leftCrossResult = 0, rightCrossResult = 0, leftMax = 0, rightMax = 0
  for (let i = m; i >= start; i --) {
    leftCrossResult +=  nums[i]
    leftMax = Math.max(leftMax, leftCrossResult)
  }
  for (let j = n; j <= end; j++ ) {
    rightCrossResult +=  nums[j]
    rightMax = Math.max(rightMax, rightCrossResult)
  }
  let crossResult = leftMax + rightMax + nums[middle]
  return Math.max(crossResult, leftResult, rightResult)
}

const A = [-2,1,-3,4,-1,2,1,-5,4]
const B = [-2,-1]

// console.log(maxSubArray(A))
console.log(maxSubArray(B))