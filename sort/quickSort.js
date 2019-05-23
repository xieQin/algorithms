const exchange = (A, p, r) => {
  let temp = A[r]
  A[r] = A[p]
  A[p] = temp
}

const partion = (A, p, r) => {
  let x = A[r], i = p - 1
  for (let j = p; j <= r - 1; j++) {
    if (A[j] <= x) {
      i++
      exchange(A, i, j)
    }
  }
  exchange(A, i + 1, r)
  return i + 1
}

const quickSort = (A, p, r) => {
  if (p < r) {
    let q = partion(A, p, r)
    quickSort(A, p, q - 1)
    quickSort(A, q + 1, r)
    return A
  } else {
    return A
  }
}

const A = [1, 2, 8, 12, 4, 9, 23, 16, 3, 57, 2, 19, 3, 43, 96, 46, 23, 46, 76, 12, 34, 16, 89, 2, 5, 9, 13]

console.log(quickSort(A, 0, A.length - 1))

