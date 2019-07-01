// 数值的整数次方
// 实现函数pow(base, exponent)，求base的exponent次方
// 不得使用库函数，不考虑大数问题

const pow = (base, exponent) => {
  if (exponent <= 0) {
    return 1
  }
  let res = 1
  while (exponent > 0) {
    res *= base
    exponent --
  }
  return res
}

console.log(pow(-2, 3))