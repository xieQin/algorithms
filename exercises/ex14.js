// 剪绳子
// 一根长度为n的绳子，剪成m段（m，n都是整数，且m > 1, n > 1）
// 每段绳子的长度记为k[0],k[1],...,k[m-1]。求k[0]*k[1]*...*k[m-1]的乘积最大值
// 例如，绳子长度为8，剪成3段，2，3，3,乘积最大值为18

// 自底向上的动态规划
const cutRopes = n => {
  if (n < 2) {
    return 0
  }
  if (n == 2) {
    return 1
  }
  if (n == 3) {
    return 2
  }
  let res = {}
  res[0] = 0
  res[1] = 1
  res[2] = 2
  res[3] = 3
  for (let i = 4; i <= n; i ++ ) {
    let count = 0
    for (let j = 1; j <= i / 2; j ++) {
      count = Math.max(count, res[j] * res[i - j])
      res[i] = count
    }
  }
  return res[n]
}

// 贪心算法
// 剩下长度n >= 5时，尽可能剪长度为3的长度
// 剩下长度为4时，剪成两段长度为2
const cutRopes2 = n => {
  if (n < 2) {
    return 0
  }
  if (n == 2) {
    return 1
  }
  if (n == 3) {
    return 2
  }
  let valOf3 = n / 3
  if (n - valOf3 * 3 == 1) {
    valOf3 = 1
  }
  let valOf2 = (n - valOf3 * 3) / 2
  return Math.floor(Math.pow(3, valOf3) * Math.pow(2, valOf2))
}

console.log(cutRopes(12))
console.log(cutRopes2(12))