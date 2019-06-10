class Stack {
  constructor () {
    this.items = []
  }

  push (...element) {
    for (let i of element) {
      this.items.push(i)
    }
  }

  pop () {
    this.items.pop()
  }

  peek () {
    return this.items[this.items.length - 1]
  }

  isEmpty () {
    return this.items.length == 0
  }

  clear () {
    this.items = []
  }

  size () {
    return this.items.length
  }

  print () {
    console.log(this.items.join(','))
  }
}

let stack = new Stack()
stack.push(1, 2, 3, 4, 5)
stack.push(5)
stack.push(8)

stack.print()

// todo
// 用ES6的限定作用域Symbol实现类
// 用ES6的WeakMap实现类