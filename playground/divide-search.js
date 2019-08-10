const A = [1, 2, 4, 5, 6, 7, 9, 12, 15, 17, 19, 23, 28, 31, 35, 36, 44]

/**
 * 二分查找
 * @param {Number[]} A 
 * @param {Number} target 
 */
function divideSearch(A, target) {
  if (A.length == 0) return -1
  let start = 0, end = A.length - 1
  while (start <= end) {
    let middle = start + Math.floor((end - start) / 2)
    if (A[middle] === target) return middle
    if (A[middle] > target) {
      end = middle - 1
    } else if (A[middle] < target) {
      start = middle + 1
    }
  }
  return -1
}

console.log(divideSearch(A, 13))