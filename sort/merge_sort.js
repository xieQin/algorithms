
/**
 * 合并
 * @param {array} array 
 * @param {number} p 
 * @param {number} q 
 * @param {number} r 
 */
const merge = (array, p, q, r) => {
  let m = q - p + 1
  let n = r - q
  let L = [], R = []
  for (let i = 0; i < m; i ++) {
    L.push(array[p + i])
  }
  for (let i = 0; i < n; i ++) {
    R.push(array[q + i + 1])
  }
  L.push(Infinity)
  R.push(Infinity)
  let i = 0, j = 0
  for (let k = p; k <= r; k++) {
    if (L[i] <= R[j]) {
      array[k] = L[i]
      i ++
    } else {
      array[k] = R[j]
      j ++
    }
  }
  return array
}

/**
 * 归并排序 
 * 时间复杂度 O(nlgn)
 * @param {array} array 
 * @param {number} p 
 * @param {number} r 
 */
const mergeSort = (array, p, r) => {
  if (p < r) {
    let q = Math.floor((p + r) / 2)
    mergeSort(array, p, q)
    mergeSort(array, q + 1, r)
    return merge(a, p, q, r)
  } else {
    return array
  }
}

const a = [11, 2, 3, 17, 25, 94, 64, 100, 26, 4, 7, 12, 77, 28, 49, 15, 95, 87, 184, 621, 22, 41, 21]
// let a = [1]
// console.log(merge(a, 1, 8, 12))
// console.log(mergeSort(a, 0, 0))
console.log(mergeSort(a, 0, 22))