// 打印从1到最大的n位数
// 输入数字n，按顺序打印从1到最大的n位十进制数，
// 例如，输入3，打印：1，2，3，...，999

// 处理大数问题
const printNum = n => {
  let max = Math.pow(10, n)
  for(let i = 1;i < max; i ++) {
    console.log(i)
  }
}

printNum(3)