/**
 * 插入排序
 * 时间复杂度O(n^2)
 * @param {array} array 
 */
const insertSort = (array) => {
  if (array.length <= 1) {
    return array
  }
  for (let i = 0; i < array.length; i++ ) {
    let temp = array[i]
    for (let j = i; j > 0; j --) {
      if (array[j] < array[j - 1]) {
        array[j] = array[j - 1]
        array[j - 1] = temp
      }
    }
  }
  return array
}

let data = [16, 4, 6, 0, 3, 11, 7, 23, 3, 28, 78, 9, 71, 12]

console.log(insertSort(data))