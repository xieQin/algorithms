// 和为s的数字
// 题目一：和为s的两个数字
// 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得他们的和正好是s
// 如果有多对数字的和等于s，输出其中任意一对即可
const findSumS = (A, s) => {
  let i = 0, j = A.length - 1
  while ((A[i] + A[j]) != s && i < j && i <= A.length - 2 && j >= 1) {
    let temp = A[i] + A[j]
    if (temp < s) {
      i ++
    } else {
      j --
    }
  }
  return [A[i], A[j]]
}

const A = [1,2,4,7,11,15]
const s = 15

console.log(findSumS(A, s))

// 题目二：和为s的连续整数序列
// 输入一个正数s，输出所有和为s的连续整数序列（至少包含两个数）
// 例如，输入15，1+2+3+4+5 = 4+5+6 = 7+8 = 15，输出三个连续整数序列
const findSumSList = s => {
  let small = 1, big = 2, result = []
  let sum = small + big
  while (small < big) {
    if (sum < s) {
      big ++
      sum += big
    }
    if (sum == s) {
      result.push([small, big])
      big ++
      sum += big
    }
    if (sum > s) {
      sum -= small 
      small ++
    }
  }
  return result
}

const s2 = 15

console.log(findSumSList(s2))