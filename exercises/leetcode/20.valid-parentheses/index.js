/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (typeof s != 'string') {
    return false
  }
  const letters = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  let i = 0, tag = false, stack = []
  while(i < s.length) {
    if (s.charAt(i) == ' ') {
      i ++
      continue
    }
    if (['(', '[', '{'].includes(s.charAt(i))) {
      stack.push(s.charAt(i))
      tag = true
      i ++
    } else if ([')', ']', '}'].includes(s.charAt(i))) {
      // console.log(letters[stack.pop()], s.charAt(i), tag)
      if (stack.length == 0) {
        return false
      }
      if (letters[stack.pop()] == s.charAt(i)) {
        i ++
        continue
      } else {
        return false
      }
    } else {
      return false
    }
  }
  if (stack.length > 0) {
    return false
  }
  return true
};

const s = '{ ()[[]]{} }'

console.log(isValid(s))