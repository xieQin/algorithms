/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!Array.isArray(nums) || nums.length <= 1) {
    return nums
  }
  let index = 1
  while(index < nums.length) {
    if (nums[index] === nums[index - 1]) {
      nums.splice(index - 1, 1)
    } else {
      index ++
    }
  }
  return nums.length
  // return [...(new Set(nums))].length
};

const A = [1, 1, 2]

console.log(removeDuplicates(A))