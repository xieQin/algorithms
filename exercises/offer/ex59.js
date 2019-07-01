// 队列的最大值
// 题目一：滑动窗口的最大值
// 给定一个数组和滑动窗口的大小，找出所有滑动窗口里的最大值
// 例如，输入数组【2，3，4，2，6，2，5，1】和数字3，一共存在6个滑动窗口输出6

const findWindowMax = (A, k) => {
  let i = 0, j = 0, max = A[0]
  for (let i = 1; i < A.length; i ++) {
    max = Math.max(max, A[i])
    if (i - j >= 3) {
      j ++
    }
  }
  return max
}

const A = [2,3,4,2,6,2,5,1]
console.log(findWindowMax(A, 3))

// 题目二： 队列的最大值
// 定义一个队列并实现函数max得到队列的最大值，要求函数max、push_back、push_front的时间复杂度为O（1）