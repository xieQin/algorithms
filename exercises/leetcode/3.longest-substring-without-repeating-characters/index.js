/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) {
    return s.length >= 0 ? s.length : 0
  }
  let max = 1, pre = s.substr(0, 1)
  for (let i = 1; i < s.length; i ++) {
    let index = pre.indexOf(s[i])
    if (index >= 0) {
      pre = pre.substr(index + 1) + s[i]
    } else {
      pre = pre + s[i]
    }
    max = Math.max(max, pre.length)
  }
  return max
};

const s = ""

console.log(lengthOfLongestSubstring(s))