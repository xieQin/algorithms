// 1 ~ n 整数中1出现的次数
// 输入一个整数，求1～n这n个整数的十进制表示中1出现的次数
// 例如，输入12，1～12这些整数中1出现的数字为1、10、11、12，1一共出现了5次

// O(nlogn) 
const findOne = N => {
  let count = 0
 for(let i = 1; i <= N; i ++) {
  count += numerOfI(i)
 }
 return count
}

const numerOfI = I => {
  let count = 0
  while (I) {
    if (I % 10 === 1) {
      count ++
    }
    I = Math.floor(I / 10)
  }
  return count
}

// 时间复杂度O(logn)，递归解决
const findOne2 = N => {
  let count = 0;
  let number = N + ''
  let length = number.length, first = number[0]
  if (length == 1 && first == 0) {
    return 0
  }
  if (length == 1 && first > 0) {
    return 1
  }
  let firstDigit = 0, otherDigit = 0, numRecurisive = 0, second = number.substr(1,length - 1) - 0
  if (first > 1) {
    firstDigit = Math.pow(10, length - 1)
  } else if (first == 1) {
    firstDigit = second + 1
  }
  otherDigit = first * (length - 1) * Math.pow(10, length - 2)
  numRecurisive = findOne2(second)
  return firstDigit + otherDigit + numRecurisive
}

console.log(findOne(12345))
console.log(findOne2(12345))