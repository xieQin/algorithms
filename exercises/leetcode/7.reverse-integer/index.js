/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = (Math.abs(x) + '').split('')
  res = Number(res.reverse().join(''))
  res = x > 0 ? res: - res
  if (res > 2147483647 || res < -2147483648) {
    res = 0
  }
  return res
};

const x = -123

console.log(reverse(x))