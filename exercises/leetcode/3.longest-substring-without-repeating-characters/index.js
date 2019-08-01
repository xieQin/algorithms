/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (typeof s !== 'string') return 0
  let length = 0, index = 0, pre = ''
  while(index < s.length) {
    let isDuplicate = pre.indexOf(s[index])
    if (isDuplicate > - 1) {
      pre = pre.substr(isDuplicate + 1) + s[index]
    } else {
      pre += s[index]
    }
    length = Math.max(length, pre.length)
    index ++
  }
  return length
};

const s = ""

console.log(lengthOfLongestSubstring(s))