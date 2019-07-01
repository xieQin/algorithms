// 股票的最大利润
// 把股票的价格按先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少
// 例如，一只股票在某些时间接节点的价格为【9，11，8，5，7，12，16，14】，最大利润为11

const getMaxProfit = A => {
  let max = A.length - 1, maxProfit = 0
  for (let i = A.length - 2; i >= 0; i --) {
    if (A[max] <= A[i]) {
      max = i
    }
    maxProfit = Math.max(maxProfit, A[max] - A[i])
  }
  return maxProfit
}

const A = [9, 11, 8, 5, 7, 12, 16, 14, 2, 5, 20, 12, 9, 8, 23, 1, 22, 19]

console.log(getMaxProfit(A))