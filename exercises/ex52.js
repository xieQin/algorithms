// 两个链表的第一个公共节点
// 输入两个链表，找出他们的第一个公共节点

class ListNode {
  constructor(val, next) {
    this.node = val
    this.next = next
  }
}

// 使用两个辅助栈，时间复杂度O（m + n）