// 字符串排列
// 输入一个字符串，输出该字符串中字符的所有排列
// 例如，输入字符abc，输出abc、acb、bac、bca、cab、aba

const stringPartition = string => {
  let result = []
  result[0] = string[0]
  for (let i = 1; i < string.length; i ++) {
    let length = result[i - 1].length
    result.push([])
    for (let j = 0; j < length; j ++) {
      result[i] = [].concat(result[i], addString(result[i - 1][j], string[i]))
    }
  }
  return result.pop()
}

const addString = (string, letter) => {
  let i = 0, res =[]
  while (i <= string.length) {
    res.push(string.substr(0, i) + letter + string.substr(i, string.length))
    i ++ 
  }
  return res 
}
const s = 'abc'
console.log(stringPartition(s))