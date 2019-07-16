/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!Array.isArray(strs)) {
    return ''
  }
  if (strs.length <= 1) {
    return strs.length == 0 ? '' : strs[0]
  }
  let commonPrexix = strs[0]
  for(let i = 1; i < strs.length; i ++) {
    let item = strs[i], length = strs[i].length, j = 0
    while(j < length && commonPrexix[j] === item[j]) {
      j ++
    }
    commonPrexix = commonPrexix.substr(0, j)
  }
  return commonPrexix
};

const strs = ["aa","a"]

console.log(longestCommonPrefix(strs))