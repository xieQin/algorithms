function patition (A, p, q) {
  if (q < p) return A
  let random = Math.floor(Math.random() * (q - p + 1)) + p
  exchange(A, p, random)
  let v = A[p], j = p + 1, i = p
  while(j <= q) {
    if (A[j] < v) {
      i ++
      exchange(A, i, j)
    }
    j ++
  }
  exchange(A, i, p)
  return i
}

function exchange (A, p, q) {
  [A[p], A[q]] = [A[q], A[p]]
}
