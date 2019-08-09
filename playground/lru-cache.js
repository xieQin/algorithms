/**
 * LRU Cache
 */
function LRU (capacity) {
  this.capacity = capacity
  this.cache = new Map()
  this.size = 0

  this.head = new LinkNode()
  this.tail = new LinkNode()
  this.head.next = this.tail
  this.tail.pre = this.head
}

function LinkNode () {
  this.value = null
  this.key = null
  this.pre = null
  this.next = null
}

LRU.prototype.addNode = function (node) {
  let next = this.head.next
  node.pre = this.head
  node.next = next
  next.pre = node
  this.head.next = node
}
LRU.prototype.removeNode = function (node) {
  let pre = node.pre, next = node.next
  next.pre = pre
  pre.next = next
}
LRU.prototype.moveToHead = function (node) {
  this.removeNode(node)
  this.addNode(node)
}
LRU.prototype.popTail = function () {
  let node = this.tail.pre
  this.removeNode(node)
  // this.tail.pre = tail.pre
  // tail.pre.next = this.tail
  return node
}

LRU.prototype.get = function(key) {
  let node = this.cache.get(key)
  if (node) {
    this.moveToHead(node)
    return node.value
  } else {
    return -1
  }
}

LRU.prototype.set = function (key, value) {
  let node = this.cache.get(key)
  if (node) {
    node.value = value
    this.moveToHead(node)
  } else {
    let newNode = new LinkNode ()
    newNode.value = value
    newNode.key = key
    this.cache.set(key, newNode)
    this.moveToHead(newNode)
    this.size += 1
    if (this.size > this.capacity) {
      let tail = this.popTail()
      this.cache.delete(tail.key)
      this.size -= 1
    }
  }
}