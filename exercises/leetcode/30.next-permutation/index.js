/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (!Array.isArray(nums)) {
    return
  }
  if (nums.length <= 1) {
    return
  }
  let index = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[index]) {
      index = i
    } else {
      let temp = nums[i]
      nums[i] = nums[index]
      nums[index] = temp
      break
    }
  }
  if (index == nums.length - 1) {
    if (nums[index] <= nums[0]) {
      nums = nums.sort((a, b) => a - b)
    } else {
      let temp = nums[index]
      nums[index] = nums[0]
      nums[0] = temp
    }
  }
};

const A = [1,3,2]

nextPermutation(A)

console.log(A)