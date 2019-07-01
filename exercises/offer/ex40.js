// 最小的k个数
// 输入N个整数，找出其中最小的k个数
// 例如，输入4、5、1、6、2、7、3、8，其中最小的4个数是1、2、3、4

// 基于partition的O(n)算法，需要修改数组
const findKNumber = (A, k) => {
  let start = 0, end = A.length - 1
  let res = partition(A, start, end)
  while (res != (k - 1)) {
    if (res < (k - 1)) {
      start = res + 1
    }
    if (res > (k - 1)) {
      end = res - 1
    }
    res = partition(A, start, end)
  }
  return A.splice(0, k)
}

const swap = (A, p, q) => {
  let temp = A[p]
  A[p] = A[q]
  A[q] = temp
}

const partition = (A, p, q) => {
  let r = Math.floor(Math.random() * (q - p)) + p
  swap(A, p, r)
  let x = A[p], i = p, j = p + 1
  while (j <= q) {
    if (A[j] < x) {
      i ++
      swap(A, i, j)
    }
    j ++
  }
  swap(A, p, i)
  return i
}

const A = [4, 5, 1, 6, 2, 7, 3, 8, 9, 13, 11, 10, 12]
const k = 7

console.log(findKNumber(A, k))

// 创建一个大小为k的数据容器用于存储最小的k个数字，使用二叉树（最大堆、红黑树）
// 数据容器中查找最大值、更新、删除操作时间复杂度O(logk)
// 对于输入n个数字而言，总的时间效率O(nlogk)，且无需修改数组
const findKNumber2 = (A, k) => {

}