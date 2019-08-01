/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = new Map()
  for (let i = 0; i < nums.length; i ++) {
    let next = target - nums[i]
    if (result.get(next) >= 0) {
      return [result.get(next), i]
    } else {
      result.set(nums[i], i)
    }
  }
}

const nums = [2, 7, 8, 19, 3]
console.log(twoSum(nums, 21))