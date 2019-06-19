// 把数组排成最小的数
// 输入一个正数数组，把数组里所有数字拼接起来排成一个数，输出能拼接所有数字中最小的
// 例如，输入数组{3, 32, 321}，输出这3个数字能排成的最小数字321323

// 基于partition的排序算法，时间复杂度O(nlogn)
const minNumber = (A, p, q) => {
  if (p < q) {
    let r = partition(A, p, q)
    minNumber(A, p, r - 1)
    minNumber(A, r + 1, q)
    return A.join('') - 0
  } else {
    return A.join('') - 0
  }
}

const swap = (A, p, q) => {
  let temp = A[p]
  A[p] = A[q]
  A[q] = temp
}

const isSmall2 = (x, y) => {
  x = x + '', y = y + ''
  let m = x + y, n = y + x
  return m < n
}

const isSmall = (x, y) => {
  x = x + '', y = y + ''
  let min = Math.min(x.length, y.length), i = 0
  if (x == y) {
    return false
  }
  while (i < min) {
    if (x[i] > y[i]) {
      return false
    }
    if (x[i] < y[i]) {
      return true
    }
    i ++
  }
  let m = x.length - 1, n = y.length - 1
  while (m >= 0 && n >= 0) {
    if (x[m] < y[n]) {
      return true
    }
    if (x[m] > y[n]) {
      return false
    }
    m --
    n --
  }
  return false
}

const partition = (A, p, q) => {
  let r = Math.floor(Math.random() * (q - p + 1)) + p
  swap(A, p, r)
  let x = A[p], i = p, j = p + 1
  while (j <= q) {
    if (isSmall(A[j], x)) {
      i ++
      swap(A, i, j)
    }
    j ++
  }
  swap(A, p, i)
  return i
}

// 大数问题处理...
// 算法正确性证明...

const minNumber2 = A => (A.sort((a, b) => !isSmall2(a, b))).join('') - 0

const A = [12, 7, 112, 3, 32, 321]
console.log(minNumber(A, 0, A.length - 1))
console.log(minNumber2(A))
// console.log(isSmall(321, 12))