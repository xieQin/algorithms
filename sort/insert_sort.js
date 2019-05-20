/**
 * 插入排序
 * 时间复杂度O(n^2)
 * @param {array} array 
 */
const insertSort = (array) => {
  let temp = []
  if (array.length <= 1) {
    return array
  }
  for (let i = 0; i < array.length; i++ ) {
    temp.push(array[i])
    for (let j = i; j > 0; j --) {
      if (temp[j] < temp[j - 1]) {
        let t = temp[j]
        temp[j] = temp[j - 1]
        temp[j - 1] = t
      }
    }
  }
  return temp
}

let data = [16, 4, 6, 0, 3, 11, 7, 23, 3, 28, 78, 9, 71, 12]

console.log(insertSort(data))