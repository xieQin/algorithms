/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let start = 1, end = n
    while (start < end) {
      let mid = start + Math.floor((end - start) / 2)
      if (isBadVersion(mid)) {
        end = mid
      } else {
        start = mid + 1
      }
    }
    return start
  };
};

const v = [false, false, false, true, true, true, true, true, true, true ]
const isBadVersion = (n) => v[n - 1]

// 3
console.log(solution(isBadVersion)(10))