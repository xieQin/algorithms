/**
 * 二叉树节点
 * @param {*} value 
 * @param {TreeNode} left 
 * @param {TreeNode} right 
 */
function TreeNode(value, left, right) {
  this.left = left
  this.right = right
  this.value = value
}

/**
 * DFS，深度优先遍历
 * 二叉树前序遍历非递归实现
 * @param {TreeNode} node 
 */
function treeSearchFront(node) {
  if (node == null) return []
  let stack = [],
    res = []
  stack.push(node)
  while (stack.length > 0) {
    res.push(stack.pop().val)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return res
}

/**
 * 二叉树前序遍历递归实现
 * @param {TreeNode} node 
 */
function treeSearchFrontRecursive(node) {
  let res = []

  function search(node) {
    if (node == null) return
    res.push(node.val)
    if (node.left) search(node.left)
    if (node.right) search(node.right)
  }
  search(node)
  return res
}

/**
 * 二叉树中序遍历非递归实现
 * @param {TreeNode} node 
 */
function treeSearchMiddle(node) {
  if (node == null) return []
  let stack = [],
    res = [],
    cur = node
  while (cur != null || stack.length > 0) {
    while (cur.left != null) {
      stack.push(cur.left)
      cur = cur.left
    }
    cur = stack.pop()
    res.push(cur.val)
    cur = cur.right
  }
  return res
}

/**
 * 二叉树中序遍历递归实现
 * @param {TreeNode} node 
 */
function treeSearchMiddleRecursive(node) {
  let res = []

  function search(node) {
    if (node == null) return
    if (node.left) search(node.left)
    res.push(node.val)
    if (node.right) search(node.right)
  }
  search(node)
  return res
}

/**
 * 二叉树后序遍历非递归实现
 * @param {TreeNode} node 
 */
function treeSearchBack(node) {
  if (node == null) return []
  let stack = [],
    res = []
  stack.push(node)
  while (stack.length > 0) {
    res.push(stack.pop().val)
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
  return res.reverse()
}

/**
 * 二叉树后序遍历递归实现
 * @param {TreeNode} node 
 */
function treeSearchBackRecursive(node) {
  let res = []

  function search(node) {
    if (node == null) return
    if (node.left) search(node.left)
    if (node.right) search(node.right)
    res.push(node.val)
  }
  search(node)
  return res
}

/**
 * BFS，广度优先遍历
 * 二叉树的层次遍历递归实现
 * @param {TreeNode} node 
 */
function treeSearchPlain(node) {
  if (node == null) return []
  let res = [],
    index = 0

  function search(node, index) {
    if (res.length == index) {
      res.push([])
    }
    res[index].push(node.val)
    if (node.left) search(node.left, index + 1)
    if (node.right) search(node.right, index + 1)
  }

  search(node, 0)
  return res
}