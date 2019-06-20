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
console.log(getNumberTimes(A, 4))
console.log(getNumberTimes2(A, 4))