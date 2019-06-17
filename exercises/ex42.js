// 连续子数组的最大和
// 输入一个整型数组，里面有正数也有负数。数组中的一个或多个连续整数组成子数组
// 求所有子数组的最大和，要求时间复杂度啊为O(n)

// 基于分治的二分算法，时间复杂度O(nlogn)
const getMaxSubArray = (A, p, q) => {
  if (!Array.isArray(A)) {
    return 0
  }
  if (q <= p) {
    return A[p]
  }
  let middle = Math.floor((p + q) / 2)
  let leftRes = getMaxSubArray(A, p, middle - 1)
  let rightRes = getMaxSubArray(A, middle + 1, q)
  let middleRes = getMaxSubArrayCrossMiddle(A, middle, p, q)
  return Math.max(leftRes, rightRes, middleRes)
}

const getMaxSubArrayCrossMiddle = (A, m, p, q) => {
  if (q <= p) {
    return A[p]
  }
  let left = m - 1, leftRes = 0, right = m, rightRes = 0, leftSum = 0, rightSum = 0;
  while (left >= p) {
    leftSum += A[left]
    leftRes = Math.max(leftSum, leftRes)
    left --
  }
  while (right <= q) {
    rightSum += A[right]
    rightRes = Math.max(rightSum, rightRes)
    right ++
  }
  return leftRes + rightRes
}

const A = [1, -2, 3, 10, -4, 7, 2, -5]

console.log(getMaxSubArray(A, 0, A.length - 1))

// 动态规划