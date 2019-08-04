var generateMatrix = function(n) {
  let matrix = [], current = 1
  for (let i = 0; i < n; i ++) {
      matrix.push([])
      for (let j = 0; j < n;j ++) {
          matrix[i].push(false)
      }
  }
  const max = n * n
  fillMatrix(matrix, 1, max, 'right', 0, 0)
  return matrix
};

var fillMatrix = function (matrix, current, max, direction, i, j) {
  if (current > max) return
  matrix[i][j] = current
  current += 1
  fillMatrix(matrix, current, max, ...nextPos(matrix, direction, i, j))
}

var shouldRotate = function (matrix, i, j) {
  let length = matrix.length
  if (i >= length || j >= length || i < 0 || j < 0) {
      return true
  }
  return matrix[i][j]
}

var nextPos = function (matrix, direction, i ,j) {
  const posLists = {
      'right': {
          rotate: 'down',
          nextPosition: [i, j + 1]
      },
      'down': {
          rotate: 'left',
          nextPosition: [i + 1, j]
      },
      'left': {
          rotate: 'up',
          nextPosition: [i, j - 1]
      },
      'up': {
          rotate: 'right',
          nextPosition: [i - 1, j]
      }
  }
  if (shouldRotate(matrix, ...posLists[direction].nextPosition)) {
      return [posLists[direction].rotate, ...posLists[posLists[direction].rotate].nextPosition]
  } else {
      return [direction, ...posLists[direction].nextPosition]
  }
}

console.log(generateMatrix(2))