// 礼物的最大价值
// 在m * n的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（大于0）
// 从棋盘的左上角开始拿棋盘中的礼物，并每次向左或者向下移动一格，直到到达棋盘的右下角
// 给定一个棋盘及礼物，计算最多能拿到最大价值的礼物

// 循环迭代解决
const getMaxGift = Matrix => {
  let m = Matrix.length, n = Matrix[0].length
  let matrix = []
  for (let i = 0; i < m; i ++) {
    matrix[i] = new Array(n).fill(0)
  }
  for (let i = 0; i < m; i ++) {
    for (let j = 0; j < n; j ++) {
      let left = 0, up = 0
      if (i > 0) {
        left = matrix[i - 1][j]
      }
      if (j > 0) {
        up = matrix[i][j - 1]
      }
      matrix[i][j] = Math.max(left, up) + Matrix[i][j]
    }
  }
  console.log(matrix)
  return matrix[m - 1][n - 1]
}

// 优化存储空间
const getMaxGift2 = Matrix => {
  let m = Matrix.length, n = Matrix[0].length
  let matrix = []
  matrix = new Array(n).fill(0)
  for (let i = 0; i < m; i ++) {
    for (let j = 0; j < n; j ++) {
      let left = 0, up = 0
      if (i > 0) {
        left = matrix[j]
      }
      if (j > 0) {
        up = matrix[j - 1]
      }
      matrix[j] = Math.max(left, up) + Matrix[i][j]
    }
  }
  console.log(matrix)
  return matrix[n - 1]
}

// 5 * 7的棋盘，求能拿到的最大价值
const Matrix = [
  [1, 2, 7, 1, 2, 4, 5],
  [2, 3, 1, 5, 3, 4, 9],
  [9, 2, 3, 6, 7, 8, 1],
  [6, 2, 4, 9, 10, 11, 2],
  [9, 2, 5, 3, 4, 2, 1]
]

console.log(getMaxGift(Matrix))
console.log(getMaxGift2(Matrix))