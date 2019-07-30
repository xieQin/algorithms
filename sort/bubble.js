/**
 * 冒泡排序
 */
const bubble = (A) => {
  for (let i = A.length; i > 0; i --) {
    for (let j = 0; j < i; j ++) {
      if (A[j] > A[i]) {
        [A[i], A[j]] = [A[j], A[i]]
      }
    }
  }
  return A
}

const A = [3, 1, 4, 23, 5, 8, 7, 0, 19, 20]

console.log(bubble(A))