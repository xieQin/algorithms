// 在排序数组中查找数字
// 题目一：数字在排序数组中出现的次数
// 统计一个数字在排序数组中出现的次数
// 例如，输入排序数组「1，2，3，3，3，3，4，5」和数字3，输出4

// 二分查找数字出现的位置，再查看左右出现的次数，时间复杂度O（nlogn）
const getNumberTimes = (A, number) => {
  let x = findNumber(A, number, 0, A.length - 1), count = 0, i = x, j = x + 1
  while(i >= 0 && A[i] == number) {
    count ++
    i --
  }
  while(j < A.length && A[j] == number) {
    count ++
    j ++
  }
  return count
}

// 二分查找，时间复杂度O（logn）
const getNumberTimes2 = (A, number) => {
  let first = findFirstNumber(A, number, 0, A.length - 1)
  let last = findLastNumber(A, number, 0, A.length - 1)
  return last - first + 1
}

// 二分查找数字出现的位置O（logn）
const findNumber = (A, number, p, q) => {
  if (p > q) {
    return p
  }
  let x = Math.floor((q - p + 1) / 2) + p
  if (A[x] == number) {
    return x
  } else if (A[x] < number) {
    return findNumber(A, number, x + 1, q)
  }
  else {
    return findNumber(A, number, p, x - 1)
  }
}

// 二分查找第一个
const findFirstNumber = (A, number ,p, q) => {
  if (p > q) {
    return p
  }
  let x = Math.floor((q - p + 1) / 2) + p
  if (A[x] == number) {
    if (A[x - 1] == number) {
      return findFirstNumber(A, number, p, x - 1)
    } else {
      return x
    }
  } else if (A[x] < number) {
    return findFirstNumber(A, number, x + 1, q)
  }
  else {
    return findFirstNumber(A, number, p, x - 1)
  }
}

// 二分查找最后一个
const findLastNumber = (A, number ,p, q) => {
  if (p > q) {
    return p
  }
  let x = Math.floor((q - p + 1) / 2) + p
  if (A[x] == number) {
    if (A[x + 1] == number) {
      return findLastNumber(A, number, x + 1, q)
    } else {
      return x
    }
  } else if (A[x] < number) {
    return findLastNumber(A, number, x + 1, q)
  }
  else {
    return findLastNumber(A, number, p, x - 1)
  }
}

const A = [1, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5]

// console.log(findNumber(A, 3, 0, A.length - 1))
// console.log(getNumberTimes(A, 4))
// console.log(getNumberTimes2(A, 4))

// 题目二：0 ～ n-1中缺失的数字
// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1中
// 在范围0～n-1的n个数字中，只有一个数字不在该数组中，求该数字

const findLostNumber = (A, p, q) => {
  if (q < p) {
    return A[q] + 1
  }
  let x = Math.floor((q - p + 1) / 2) + p
  if (x == A[x]) {
    return findLostNumber(A, x + 1, q)
  } else {
    if ( (x - 1) == A[x - 1]) {
      return x
    } else {
      return findLostNumber(A, p, x - 1)
    }
  }
}

const B = [0, 1, 2, 3, 4, 5, 6, 7, 9]

// console.log(findLostNumber(B, 0, B.length - 1))

// 题目三：数组中数字和下标相同的元素
// 假设一个单调递增数组中的每个元素都是整数且唯一
// 编写一个函数，找出数组中任意一个数字与下标相同的元素
// 例如，输入数组【-3，-1，1，3，5】，输出【3】

// 顺序查找O（n）
const findEqualNumber = A => {
  for (let i = 0; i < A.length; i ++) {
    if (i == A[i]) {
      return {
        i: A[i]
      }
    }
  }
  return -1
}

// 二分查找O（logn）
const findEqualNumber2 = (A, p, q) => {
  if (q < p) {
    return -1
  }
  let x = Math.floor((q - p + 1) / 2) + p
  if (x == A[x]) {
    return  A[x]
  } else if (x > A[x]){
    return findEqualNumber2(A, x + 1, q)
  } else {
    return findEqualNumber2(A, p, x - 1)
  }
}

const C = [-3, -1, 1, 2, 4]

console.log(findEqualNumber2(C, 0, C.length - 1))