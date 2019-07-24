/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (!Array.isArray(nums)) {
      return nums
    }
    let i = 0
    while (i < nums.length) {
      if (val === nums[i]) {
        nums.splice(i, 1)
      } else {
        i ++
      }
    }
    return nums.length
};

const A = [1,2,3,3,2,1,5,2,2,1]

console.log(removeElement(A, 2))