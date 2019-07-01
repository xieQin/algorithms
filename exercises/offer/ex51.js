// 数组中的逆序对
// 数组中对两个数字，如果前面一个数字大于后一个数字，则这两个数字构成一对逆序对
// 输入一个数组，求数组中逆序对的个数
// 例如，数组「7，5，6，4」中，一共存在5个逆序对，分别是「7，5」、「7，6」、「7，4」、「5，4」、「6，4」

// 循环查找
const getReverse = A => {
  let res = []
  for (let i = 0; i < A.length; i ++) {
    for (let j = i + 1; j < A.length; j ++) {
      if (A[i] > A[j]) {
        res.push([A[i], A[j]])
      }
    }
  }
  return res.length
}

// 动态规划迭代查找
const getReverse2 = A => {
  let count = 0
  for (let i = 1; i < A.length; i ++) {
    let x = partition(A, 0, i)
    count += (i - x)
  }
  return count
}

const swap = (A, p, q) => {
  let temp = A[p]
  A[p] = A[q]
  A[q] = temp
}

const partition = (A, p, q) => {
  swap(A, p, q)
  let x = A[p], i = p, j = p + 1
  while (j <= q) {
    if (A[j] <= x) {
      i ++
      swap(A, i, j)
    }
    j ++
  }
  swap(A, i, p)
  return i
}

const A = [3, 22, 1, 18, 29, 7, 5, 6, 4, 3, 12, 8, 2, 1]

console.log(getReverse(A))
console.log(getReverse2(A))