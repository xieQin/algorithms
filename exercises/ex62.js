// 圆圈中最后剩下的数字
// 0，1，...，n-1这n个数字排成一圈，从数字0开始，每次从这个圆圈里删除第m个数字，求圆圈里剩下的最后一个数字

 const deleteNumberFromCircle = (n, m) => {
  let A = []
  for (let i = 0; i < n; i++) {
    A.push(i)
  }
  while (A.length != 1) {
    let temp = m % A.length
    A.splice(temp - 1, 1)
  }
  return A
 }

 const n = 0
 const m = 5

 console.log(deleteNumberFromCircle(4000, 997))

 // 约瑟夫环问题
