/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let index = 0, len = nums.length - 1
  while (index < len) {
    let mid = index + Math.floor((len - index) / 2)
    if (nums[mid] < target) {
      index = mid + 1
    } else {
      len = mid
    }
  }
  return nums[index] >= target ? index : index + 1
};

const A = [1,3,5,6]
const num = 5

console.log(searchInsert(A, num))