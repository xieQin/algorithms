// 丑数
// 将只包含因子2、3、5的数字称为丑数，求按从小到大排序的第1500个丑数
// 例如，6、8是丑数，14不是，习惯上将1当作第1个丑数

// 顺序判断
const findUglyNumber = k => {
  let count = 0, num = 1
  while (count <= k) {
    if (isUglyNumber(num)) {
      count ++
    }
    num ++
  }
  return num
}

// 按丑数生成规则查找
const findUglyNumber2 = k => {
  let res = []
  res[0] = 1
  for (let i = 1; i < k; i ++) {
    let m2 = res[i - 1] * 2, m3 = res[i - 1] * 3, m5 = res[i - 1] * 5
    if (!res.includes(m2)) {
      res.push(m2)
    }
    if (!res.includes(m3)) {
      res.push(m3)
    }
    if (!res.includes(m5)) {
      res.push(m5)
    }
  }
  res.sort((a, b) => a - b)
  return res[k - 1]
}

const isUglyNumber = number => {
  temp = number
  while (temp != 1) {
    if (temp == 1) {
      return true
    }
    if (temp % 5 !== 0 && temp % 2 !== 0 && temp % 3 !== 0) {
      return false
    }
    if (temp % 2 == 0) {
      temp = temp / 2
    }
    if (temp % 3 == 0) {
      temp = temp / 3
    }
    if (temp % 5 == 0) {
      temp = temp / 5
    }
  }
  return true
}

// console.log(isUglyNumber(30))
console.log(findUglyNumber2(1500))