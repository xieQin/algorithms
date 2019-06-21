// 数组中数字出现的次数
// 题目一：数组中只出现一次的两个数字
// 一个整型数组中除了2个数字，其余数字均出现了两次，找出这两个只出现一次的数字
// 要求时间复杂度O（n），空间复杂度O（1）

const findNumer = A => {
  let count = A[0]
  for (let i = 1; i < A.length; i ++) {
    count = count ^ A[i]
  }
  return count
}

const A = [1, 2, 2, 1, 4, 4, 5, 6, 6, 7, 7, 8]

console.log(findNumer(A))

// 题目二：数组汇总唯一只出现一次的数字
// 一个整型数组中，除一个数字外，其他数字都出现了三次，找出只出现一次的