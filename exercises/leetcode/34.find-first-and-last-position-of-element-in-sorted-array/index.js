/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (!Array.isArray(nums)) {
    return [-1, -1]
  }
  return [nums.indexOf(target), nums.lastIndexOf(target)]
};

const A = [5,7,7,8,8,10];

console.log(searchRange(A, 8))