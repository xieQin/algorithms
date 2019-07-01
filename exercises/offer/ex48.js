// 最长不含重复字符的子字符串
// 从字符串中找出一个最长不包含重复字符的子字符串，计算该子字符串的长度，假设字符串中只包含“a～z”的字符
// 例如，在字符“arabcacfr”，最长不含重复字符的子字符串为“acfr”，长度为4

const findMaxSubString = string => {
  let count = 0, res =[]
  res[0] = 1
  for (let i = 1; i < string.length; i ++) {
    let preSubStr = string.substr(0, i).substr(- res[i - 1])
    let preIndex = preSubStr.lastIndexOf(string[i])
    res[i] = preIndex > -1 ? (res[i - 1] - preIndex): (res[i - 1] + 1)
    count = Math.max(res[i], res[i - 1])
  }
  return count
}

console.log(findMaxSubString('arabcacfr'))