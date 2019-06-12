const A = [0,1,4,2,2,4,1,0]
// 找出数组中重复的数字
// 在长度为N的数组中，所有数组都在0～N-1范围内，找出数组中重复的数字
// 例如：长度为7的数组[0,1,4,2,2,4,1]，输出为[1,2,4]

// 时间复杂度O(n)，空间复杂度O(n)
const findDup = A => {
  let record = [], res = []
  for (let i = 0; i < A.length; i ++) {
    if (record[A[i]] >= 0) {
      res.push(A[i])
    } else {
      record[A[i]] = A[i]
    }
  }
  return res
}

// 时间复杂度O(n)，空间复杂度O(1)
const findDup1 = A => {
  let res = []
  for (let i = 0; i < A.length; i++) {
    while (A[i] != i && i < A.length) {
      if (A[i] == A[A[i]]) {
        res.push(A[i])
        break
      }
      let temp = A[A[i]]
      A[A[i]] = A[i]
      A[i] = temp
    }
  }
  return res
}

console.log(findDup(A))
console.log(findDup1(A))

// 删除已排序数组中的重复数字，不允许使用额外的数组空间
// 例如：长度为7的数组[0,1,2,2,4,4,5]，输出为[0,1,2,4]
const findDup2 = A => {
  let i = 0, j = 1;
  while (j < A.length) {
    if (A[j] > A[i]) {
      A[i + 1] = A[j]
      i ++
      j ++
    } else {
      j ++
    }
  }
  return A.splice(0, i + 1)
}

console.log(findDup2([0,1,2,2,4,4,5]))

// 不修改数组找出重复的数字
// 长度为N+1的数组，所有数字都在1～N的范围内，数组中至少有一个数字是重复的，找出数组中任意一个重复的数字，但不能修改输入的数组
// 例如：输入长度为8的数组[2，3，1，7，2，4，5，6]，输出为数字2
const findDup3 = A => {

}