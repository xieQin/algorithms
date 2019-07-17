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
  let sumResult = new Set()
  for (let i = 0; i < nums.length; i ++) {
    let target = 0 - nums[i],j = 0
    while (j < nums.length) {
      let r = nums.indexOf(target - nums[j])
      if (j != i && r > -1 && r != i) {
        let res = [nums[i], nums[j], nums[r]].sort((a, b) => a - b)
        if (!sumResult.has(res)) {
          sumResult.add(res)
        }
      }
      j ++
    }
  }
  return sumResult
};

const a = new Set()

a.add([1, 2])
a.add([1,2])
a.add(1)

console.log(a)

const nums = [-1, 0, 1, 2, -1, -4]

console.log(threeSum(nums))