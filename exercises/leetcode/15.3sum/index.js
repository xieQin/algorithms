/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (!Array.isArray(nums)) {
    return []
  }
  if (nums.length <= 2) {
    return []
  }
  let sumResult = []
  for (let i = 0; i < nums.length; i ++) {
    let target = 0 - nums[i],j = 0
    while (j < nums.length) {
      j ++
    }
  }
};

const nums = [-1, 0, 1, 2, -1, -4]

console.log(threeSum(nums))