// 求 1 + 2 + 3 + ... + n
// 要求不能使用神乘法除法、for、while、if、else、switch、case关键字，不能使用条件判断语句A？B：C

function addSum () {
  ++ this.N
  this.count += N
}

addSum.prototype.getSum = () => {
  return this.count
}

addSum.prototype.reset = () => {
  this.count = 0
  this.N = 0
}

const sumN = n => {
  let sum = new addSum()
  sum.reset()
  const A = [].fill(new addSum(), 0, n - 1)
  return new addSum().getSum()
}

let N = 100

console.log(sumN(N))