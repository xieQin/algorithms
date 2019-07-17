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
      if (j != i && r > -1 && r != i && r != j) {
        let res = [nums[i], nums[j], nums[r]].sort((a, b) => a - b).join(',')
        if (!sumResult.has(res)) {
          sumResult.add(res)
        }
      }
      j ++
    }
  }
  return [...sumResult].map(item => item.split(',').map(num => parseInt(num, 0)))
};

// console.log(threeSum(nums))

const generateRandomArray = (start, end, length) => {
  let randomArray = new Set()
  recursiveGenArray(randomArray, start, end, length)
  return [...randomArray]
}

const generateNum = (start, end) => Math.ceil(Math.random() * (end - start + 1)) + start

const recursiveGenArray = (set, start, end, length) => {
  if (length > 0 && set.size < length ) {
    let num = generateNum(start, end)
    if (!set.has(num)) {
      set.add(num)
    }
    recursiveGenArray(set, start, end, length)
  }
}

console.log(generateRandomArray(2, 32, 5))