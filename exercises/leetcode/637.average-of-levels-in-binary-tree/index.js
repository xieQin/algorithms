/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  let result = [], stack = []
  stack.push(root)
  while(stack.length > 0) {
    let length = stack.length, sum = 0
    for (let i = 0; i < length; i ++) {
      let node = stack[i]
      sum += node.val
      if (node.left) {
        stack.push(node.left)
      }
      if (node.right) {
        stack.push(node.right)
      }
    }
    result.push(sum / length)
  }
  return result
};