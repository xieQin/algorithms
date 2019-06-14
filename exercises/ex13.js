// 机器人运动范围
// 地上有m行n列的方格，一个机器人从(0,0)格子开始移动，它每次可以上、下、左、右移动一格，但不能进入行坐标和列坐标位数之和大于k的格子
// 例如，k为18时，机器人能够进入(35,37)的格子，因为3+5+3+7=18，但它不能进入方格(35,38)
// 问该机器人能到达多少个格子

// 迭代
const robot = (m, n, k) => {
  if (k < 0) {
    return 0
  }
  let matrix = generateMatrix(m, n), res = 1
  matrix[0][0] = true
  for (let i = 0; i < m; i ++ ) {
    for (let j = 0; j < n; j ++ ) {
      let temp = calculate(i, j)
      if (temp <= k && isAvaliable(matrix, i, j)) {
        matrix[i][j] = true
        res ++
      }
    }
  }
  return res
}

const isAvaliable = (matrix, x, y) => {
  if (isInMatrix(matrix, x, y + 1) || isInMatrix(matrix, x, y - 1) || isInMatrix(matrix, x + 1, y) || isInMatrix(matrix, x - 1, y)) {
    return true
  } else {
    return false
  }
}

const isInMatrix = (matrix, x, y) => {
  let m = matrix.length, n = matrix[0].length
  if ((x >= 0 && x < m) && (y >= 0 && y < n)) {
    return matrix[x][y]
  }
  return false
}

const calculate = (x, y) => {
  x = x + ''
  y = y + ''
  let res = x + y
  res = res.split('')
  return res.reduce((a, b) => (a - 0) + (b - 0))
}

const generateMatrix = (m, n) => {
  let matrix = []
  for (let i = 0; i < m ; i ++) {
    matrix.push([])
    for (let j = 0; j < n; j++ ) {
      matrix[i][j] = false
    }
  }
  return matrix
}

// 回溯法
const robot2 = (m, n, k) => {
  if (k < 0) {
    return 0
  }
  let matrix = generateMatrix(m, n)
  let count = move(matrix, 0, 0, k)
  return count
}

const check = (matrix, x, y, k) => {
  let m = matrix.length, n = matrix[0].length
  if ((x >= 0 && x < m) && (y >= 0 && y < n) && matrix[x][y] === false) {
    let temp = calculate(x, y)
    return temp <= k
  }
  return false
}

const move = (matrix, x, y, k) => {
  let count = 0
  if (check(matrix, x, y, k)) {
    matrix[x][y] = true
    count = 1 + move(matrix, x - 1, y, k) + move(matrix, x + 1, y, k) + move(matrix, x, y + 1, k) + move(matrix, x, y - 1, k)
  }
  return count
}

// console.log(generateMatrix(10,5))
// console.log(calculate(10,25))
console.log(robot(10, 8, 4))
console.log(robot2(10, 8, 4))