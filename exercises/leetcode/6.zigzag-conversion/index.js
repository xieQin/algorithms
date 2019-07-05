/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (s.length <= 1 || numRows <= 1) {
    return s
  }
  let resArr = []
  for (let i = 0; i < numRows; i ++ ) {
    resArr.push([])
  }
  let curRow = 0, direction = false // true 向下，false 向上
  for (let i = 0; i < s.length; i ++) {
    resArr[curRow].push(s[i])
    if (curRow == numRows - 1  || curRow == 0) {
      direction = !direction
    }
    curRow += direction ? 1 : -1
  }
  let res = ''
  for (let i = 0; i < resArr.length; i ++) {
    res += resArr[i].join('')
  }
  return res
};

const s = 'AB'

console.log(convert(s, 1))