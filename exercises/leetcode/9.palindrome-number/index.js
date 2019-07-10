/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // if (x < 0) {
  //   return false
  // }
  // if (x == 0) {
  //   return true
  // }
  // x = x.toString()
  // let i = 0, j = x.length - 1
  // while(i <= j) {
  //   if (x[i] != x[j]) {
  //     return false
  //   }
  //   i ++
  //   j --
  // }
  // return true
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false
  }
  let revertNumber = 0
  while(x > revertNumber) {
    revertNumber = revertNumber * 10 + x % 10
    x = parseInt(x / 10)
  }
  return x === revertNumber || x === parseInt(revertNumber / 10)
};

const x = 121
console.log(isPalindrome(x))