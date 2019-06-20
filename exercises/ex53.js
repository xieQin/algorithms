// 在排序数组中查找数字
// 题目一：数字在排序数组中出现的次数
// 统计一个数字在排序数组中出现的次数
// 例如，输入排序数组「1，2，3，3，3，3，4，5」和数字3，输出4

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

const A = [1, 2, 3, 3, 3, 3, 4, 5]

// console.log(findNumber(A, 3, 0, A.length - 1))
console.log(getNumberTimes(A, 4))