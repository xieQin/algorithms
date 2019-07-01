// 在一个二维数组中，每一行都按照从左到右递增，每一列都按照从上到下递增
// 实现一个函数，输入一个上述的二维数组和一个整数，判断二维数组中是否有这个整数
const findNumber = (A, val) => {
  if (!Array.isArray(A)) {
    return false
  }
  if (A.length <= 0) {
    return false
  }
  let column = 0, row = A[0].length
  while ( column < A.length && row >= 0) {
    let temp = A[column][row]
    if (temp == val) {
      return true
    } else if (temp < val) {
      column ++
    } else {
      row --
    }
  }
  return false
}

const A = [
  [1, 2, 4, 5, 7, 8, 10],
  [2, 4, 5, 7, 9, 11, 12],
  [4, 6, 7, 8, 10, 13, 15],
  [7, 9, 12, 18, 19, 20, 21],
  [8, 12, 13, 19, 21, 22, 29]
]

console.log(findNumber(A, 12))