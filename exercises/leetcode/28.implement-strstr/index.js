/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (typeof haystack !== 'string') {
    return -1
  }
  return haystack.indexOf(needle)
};

const S = 'Hello'
const N = 'll'

console.log(strStr(S, N))