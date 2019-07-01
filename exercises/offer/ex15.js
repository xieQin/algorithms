// 二进制中1的个数
// 实现一个函数：输入一个整数，输出该数二进制中表示1的个数
// 例如，整数9，二进制表示1001，有2位是1，输出2

// 位运算
const twoNums = n => {
  let count = 0
  while (n) {
    if (n & 1) {
      count ++
    }
    n = n >> 1
  }
  return count
}

// 位运算
const twoNums2 = n => {
  let count = 0
  while (n) {
    count ++
    n = (n - 1) & n
  }
  return count
}

console.log(twoNums(9))
console.log(twoNums2(9))