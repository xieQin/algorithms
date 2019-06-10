class Queue {
  constructor () {
    this.items = []
  }
  
  enqueue (element) {
    this.items.push(element)
  }

  dequeue () {
    this.items.shift()
  }

  front () {
    return this.items[0]
  }

  isEmpty () {
    return this.items.length > 0
  }

  size () {
    return this.items.length
  }
}

let queue = new Queue()
queue.enqueue(1)
console.log(queue)
queue.enqueue(2)
console.log(queue)
queue.dequeue()

console.log(queue)