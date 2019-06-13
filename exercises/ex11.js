// 旋转数组的最小数字
// 把一个数组的最开始若干元素搬到数组的末尾，称之为数组的旋转
// 输入一个递增排序数组的一个旋转，输出旋转数组的最小元素
// 例如，输入[3,4,5,1,2], 输出1

// 递归方法
const rotateMin = (A, p, q) => {
  if (A.length == 1) {
    return A[0]
  }
  if (A.length <= 2) {
    return Math.min(A[0], A[1])
  }
  let r = Math.floor(A.length / 2)
  if (p == q && A[r] == p) {
    return findInOrder(A)
  } else if (A[r] <= q) {
    A = A.splice(0, r + 1)
    return rotateMin(A, p, q)
  } else if (A[r] >= p) {
    A = A.splice(r, A.length - r)
    return rotateMin(A, p, q)
  }
}

// 迭代方法
const rotateMin2 = A => {
  if (!Array.isArray(A) || A.length < 0) {
    return
  }
  let start = 0, end = A.length - 1, mid = start
  while (A[start] >= A[end]) {
    if (end - start <= 1) {
      mid = end
      break
    }
    mid = Math.floor((start + end) / 2)
    if (A[end] == A[start] && A[mid] == A[start]) {
      return findInOrder(A)
    } else if (A[mid] >= A[start]) {
      start = mid
    } else if (A[mid] <= A[end]) {
      end = mid
    }
  }
  return A[mid]
}

const findInOrder = A => {
  let i = 0
  while (i < A.length) {
    if (A[i] < A[0]) {
      return A[i]
    }
    i ++
  }
}
console.log(rotateMin([1,0,1,1,1,1],1,1))
console.log(rotateMin2([1,0,1,1,1]))