// 把数字翻译成字符串
// 给定一个数字，按如下规则将它翻译为字符串：0翻译成“a", 1翻译成"b", ..., 11翻译成"l", ..., 25翻译成"z"
// 一个数字可能有多种翻译，例如，12258有5种不同的翻译，分别是“bccfi”，“bwfi”，“bczi”，“mcfi”，“mzi”
// 实现一个函数，计算一个数字有多少种不同的翻译

const covertList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'u', 'w', 'x', 'y', 'z']

const mergeValue = (result, res, x, y) => {
  let xValue = covertList[x - 0]
  for (let j = 0; j < res[y].count; j ++) {
    result.push(xValue + res[y].value[j])
  }
  return result
}

// 自底向上迭代解决
const convertNumber = N => {
  let n = N + ''
  let length = n.length, res = {}
  if (length < 1) {
    return 0
  }
  if (length == 1) {
    return 1
  }
  res[''] = {
    count: 1,
    value: ['']
  }
  res[n[length - 1]] = {
    count: 1,
    value: [covertList[n[length - 1] - 0]]
  }
  for (let i = 2; i <= length; i ++) {
    let num = n.substr(-i)
    let oldNum = num.substr(1)
    let addNum = num.substr(0, 2)
    let leftAddNum = num.substr(2)
    let temp = (addNum - 0) <= 25 ? 1 : 0
    let value = []
    mergeValue(value, res, num[0], oldNum)
    if (temp == 1) {
      mergeValue(value, res, addNum, leftAddNum)
    }
    res[num] = {
      count: res[oldNum].count + temp * res[leftAddNum].count,
      value
    }
  }
  return res[n]
}

const Num = 176215
console.log(convertNumber(Num))