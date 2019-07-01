// 顺时针打印矩阵
// 输入一个矩阵，以顺时针顺序从外向内打印每一个数字
// 例如，输入以下矩阵
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16
// 输出1，2，3，4，8，12，16，15，14，13，9，5，6，7，11，10

const printMatrix = (matrix, i, j, direction) => {
  if (!isValid(matrix, i, j)) {
    console.log('end')
    return
  }
  console.log(matrix[i][j])
  matrix[i][j] = false
  const nextDirection = {
    'right': {
      rotate: 'down',
      nextPos: [i, j + 1]
    },
    'left': {
      rotate: 'up',
      nextPos: [i, j - 1]
    },
    'down': {
      rotate: 'left',
      nextPos: [i + 1, j]
    },
    'up': {
      rotate: 'right',
      nextPos: [i - 1, j]
    }
  }
  if (isValid(matrix, ...nextDirection[direction].nextPos)) {
    printMatrix(matrix, ...nextDirection[direction].nextPos, direction)
  } else {
    printMatrix(matrix, ...nextDirection[nextDirection[direction].rotate].nextPos, nextDirection[direction].rotate)
  }
}

const isValid = (matrix, i, j) => {
  if (!Array.isArray(matrix)) {
    return false
  }
  const m = matrix.length
  const n = matrix[0].length
  if (i >= m || j >= n || i < 0 || j < 0) {
    return false
  }
  return matrix[i][j] != false ? true: false
}

const Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

console.log(printMatrix(Matrix, 0, 0, 'right'))