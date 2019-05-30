const priceList = [0, 1, 2, 4, 7, 9, 12, 12, 16, 17, 19, 19, 20, 20, 22, 27, 28, 29, 29, 28, 30, 35, 37, 38, 39, 50, 55, 52, 58, 60, 99, 102, 105]

//长度为n英寸的钢条共有2^(n-1)种不同的切割方案

/**
 * 自顶向下递归
 * @param {*} p 
 * @param {*} n 
 */
const CUT_ROD = (p, n) => {
  let res = - Infinity
  if ( n == 0) {
    return 0
  }
  for (let i = 1 ; i <= n; i ++) {
    res = Math.max(res, p[i] + CUT_ROD(p, n - i))
  }
  return res
}

console.log(CUT_ROD(priceList, 7))

/**
 * 带备忘的自顶向下
 * @param {*} p 
 * @param {*} n 
 */
const MEMOIZED_CUT_ROD = (p, n) => {
  let r = []
  for (let i = 0; i <= n; i ++) {
    r[i] = - Infinity
  }
  return MEMOIZED_CUT_ROD_AUX(p, n, r)
}

const MEMOIZED_CUT_ROD_AUX = (p, n, r) => {
  let q
  if (r[n] >= 0) {
    return r[n]
  }
  if (n == 0) {
    q = 0
  } else {
    q = - Infinity
    for (let i = 1; i <= n; i++) {
      q = Math.max(q, p[i] + MEMOIZED_CUT_ROD_AUX(p, n - i, r))
    }
  }
  r[n] = q
  return q
}
console.log(MEMOIZED_CUT_ROD(priceList, 7))

/**
 * 自底向上
 * @param {*} p 
 * @param {*} n 
 */
const BOTTOM_UP_CUT_ROD = (p, n) => {
  let r = []
  r[0] = 0
  for (let i = 1; i <= n; i ++ ) {
    let q = - Infinity
    for (let j = 1; j <= i; j ++) {
      q = Math.max(q, p[j] + r[i - j])
    }
    r[i] = q
  }
  return r[n]
}
console.log(BOTTOM_UP_CUT_ROD(priceList, 7))