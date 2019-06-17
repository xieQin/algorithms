// 数组中出现次数超过一半的数字
// 数组中有一个数字出现的次数超过数组长度的一半，找出这个数字
// 例如，输入一个长度为9的数组【1，2，3，2，2，2，5，4，2】，数字2在数组中出现了5次，超过数组长度的一半，输出数字2

const swap = (A, p, q) => {
  let temp = A[p]
  A[p] = A[q]
  A[q] = temp
}

// 基于partition的时间复杂度为O(n)算法
// 数组中有一个数字出现次数超过数组长度的一半，则数组排序后该数字一定出现在中位数上
const findNumer = A => {
  let start = 0, end = A.length - 1
  let middle = Math.floor((start + end) / 2), r = partition(A, start, end)
  while (middle != r) {
    if (r > middle) {
      end = r - 1
    }
    if (r < middle) {
      start = r + 1
    }
    r = partition(A, start, end)
  }
  return A[r]
}

const partition = (A, p, q) => {
  let r = Math.floor(Math.random() * (q - p)) + p
  swap(A, p, r)
  let x = A[p], i = p, j = p + 1
  while (j <= q) {
    if (A[j] < x) {
      i ++
      swap(A, i, j)
    }
    j ++
  }
  swap(A, p, i)
  return i
}

// 顺序查找, O(n)
const findNumer2 = A => {
  let number = A[0]
  let count = 1
  for (let i = 1; i < A.length; i ++) {
    if (number == A[i]) {
      count ++
    } else {
      count --
      if (count <= 0) {
        number = A[i]
        count = 1
      }
    }
  }
  return number
}

console.log(findNumer([1,2,3,2,5,4,2,3,3,3,3,3,3,3,3,3,3,6,7,8,3,3,8,3]))
console.log(findNumer2([1,2,3,2,5,4,2,3,3,3,3,3,3,3,3,3,3,6,7,8,3,3,8,3]))