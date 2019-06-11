const array = [0,1,4,2,2,4,1,0]
// 找出数组中重复的数字
// 在长度为N的数组中，所有数组都在0～N-1范围内，找出数组中重复的数字
// 例如：长度为7的数组[0,1,4,2,2,4,1]，输出为[1,2,4]

// 时间复杂度O(n)，空间复杂度O(n)
const findDup = array => {
  let record = [], res = []
  for (let i = 0; i < array.length; i ++) {
    if (record[array[i]] >= 0) {
      res.push(array[i])
    } else {
      record[array[i]] = array[i]
    }
  }
  return res
}

// 时间复杂度O(n)，空间复杂度O(1)
const findDup1 = array => {
  let res = []
  for (let i = 0; i < array.length; i++) {
    while (array[i] != i && i < array.length) {
      if (array[i] == array[array[i]]) {
        res.push(array[i])
        break
      }
      let temp = array[array[i]]
      array[array[i]] = array[i]
      array[i] = temp
    }
  }
  return res
}

console.log(findDup(array))
console.log(findDup1(array))

// 删除已排序数组中的重复数字，不允许使用额外的数组空间
// 例如：长度为7的数组[0,1,2,2,4,4,5]，输出为[0,1,2,4]
const findDup2 = array => {
  let i = 0, j = 1;
  while (j < array.length) {
    if (array[j] > array[i]) {
      array[i + 1] = array[j]
      i ++
      j ++
    } else {
      j ++
    }
  }
  return array.splice(0, i + 1)
}

console.log(findDup2(array))