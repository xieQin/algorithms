// 包含min函数的栈
// 定义栈的数据结构，在该类型中实现一个能够得到栈的最小元素的min函数
// 要求在该栈中，调用push、pop、min都是O（1）

class Stack {
  constructor () {
    this.stack = []
    this.helpStack = []
    this.minValue = Infinity
  }
  pop () {
    this.stack.pop()
    this.helpStack.pop()
    this.minValue = this.helpStack[this.helpStack.length - 1]
  }
  push (item) {
    if (item < this.minValue) {
      this.minValue = item
      this.helpStack.push(item)
    } else {
      this.helpStack.push(this.minValue)
    }
    this.stack.push(item)
  }
  min () {
    return this.minValue
  }
}

const s1 = new Stack()

s1.push(1)
console.log(s1)
s1.push(2)
console.log(s1)
s1.push(3)
console.log(s1)
s1.push(0)
console.log(s1)
s1.pop()
console.log(s1)
s1.pop()
console.log(s1)
s1.pop()
console.log(s1)
s1.pop()
console.log(s1)
// console.log(s1.min())