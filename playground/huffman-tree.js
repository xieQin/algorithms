/**
 * 定义Huffman树节点
 * @param {Number} data 
 */
function TreeNode (data) {
  this.data = data
  this.left = null
  this.right = null
}

/**
 * 输入数组，生成Huffman编码树
 * @param {Number[]} A
 * @return {TreeNode} 
 */
function generateHuffmanTree (A) {
  if (!Array.isArray(A)) return null
  if (A.length <= 0) return null
  let nodes = []
  nodes = A.map(item => new TreeNode(item))
  while (nodes.length > 1) {
    nodes = nodes.sort((a, b) => a.data - b.data)
    let one = nodes.shift()
    let two = nodes.shift()
    let newNode = new TreeNode(one.data + two.data)
    newNode.left = one
    newNode.right = two
    nodes.unshift(newNode)
  }
  return nodes[0]
}

const A = [2, 5, 12, 32, 7, 3, 19, 22]

console.log(generateHuffmanTree(A))