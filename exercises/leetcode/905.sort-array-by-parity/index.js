/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let left = 0, right = A.length - 1
  while (left < right) {
    if (A[left] % 2 == 1 && A[right] % 2 == 0) {
      let temp = A[right]
      A[right] = A[left]
      A[left] = temp
      left ++
      right --
    } else if (A[left] % 2 == 1) {
      right --
    } else if (A[right] % 2 == 0) {
      left ++
    } else {
      right --
      left ++
    }
  }
  return A
};

const A = [1,3,4,2]
console.log(sortArrayByParity(A))