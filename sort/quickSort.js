/**
 * 数组交换
 * @param {array} A 
 * @param {number} p 
 * @param {number} r 
 */
const exchange = (A, p, r) => {
  let temp = A[r]
  A[r] = A[p]
  A[p] = temp
}

/**
 * 选择第一项作为主元，划分
 * @param {array} A 
 * @param {number} p 
 * @param {number} r 
 */
const partion = (A, p, r) => {
  let x = A[p], i = p
  for (let j = p + 1; j <= r; j++) {
    if (A[j] <= x) {
      i++
      exchange(A, i, j)
    }
  }
  exchange(A, p, i)
  return i
}

/**
 * 随机选取主元，划分
 * @param {*} A 
 * @param {*} p 
 * @param {*} r 
 */
const partion2 = (A, p, r) => {
  let pivot = Math.floor(Math.random() * (r - p + 1)) + p
  exchange(A, p, pivot)
  return partion(A, p, r)
}

/**
 * 快速排序 时间复杂度O(nlgn)
 * @param {array} A 
 * @param {number} p 
 * @param {number} r 
 */
const quickSort = (A, p, r) => {
  if (p < r) {
    let q = partion2(A, p, r)
    quickSort(A, p, q - 1)
    quickSort(A, q + 1, r)
    return A
  } else {
    return A
  }
}

const A = [0, 1, 2, 8, 12, 4, 9, 23, 16, 3, 57, 2, 19, 3, 43, 96, 46, 23, 46, 76, 12, 34, 16, 89, 2, 5, 9, 13]

console.log(quickSort(A, 0, A.length - 1))

