/**
 * 优先队列
 */
class PriorityQueue {
  constructor () {
    this.items = []
  }
  
  enqueue (element, priority) {
    let pos = 0
    for (let i =  0; i < this.items.length; i ++) {
      if (this.items[i].priority >= priority) {
        pos = i + 1
      }
    }
    this.items.splice(pos, 0, {
      priority,
      value: element
    })
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

let priorityQueue = new PriorityQueue()
priorityQueue.enqueue('a', 1)
// console.log(priorityQueue)
priorityQueue.enqueue('b', 2)
// console.log(priorityQueue)
priorityQueue.enqueue('c', 1)
console.log(priorityQueue)
priorityQueue.dequeue()

console.log(priorityQueue)