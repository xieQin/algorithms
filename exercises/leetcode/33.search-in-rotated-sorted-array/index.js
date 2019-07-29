/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let length = nums.length - 1, i = 0
  while (i < length) {
    let mid = Math.floor((i + length) / 2)
    if ((nums[i] > target) ^ (nums[i] > nums[mid]) ^ (target > nums[mid])) {
      i = mid + 1
    } else {
      length = mid
    }
  }
  return i === length && nums[i] == target ? i : -1
};

const A = [4,5,6,7,0,1,2]

console.log(search(A, 1))