/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  if (typeof str != 'string') {
    return 0
  }
  str = str.trim()
  let abs = true
  if (str.indexOf('-') == 0 || str.indexOf('+') == 0) {
    abs = !(str.indexOf('-') == 0)
    str = str.substr(1, str.length - 1)
  }
  let index = 0, count = ''
  while(index < str.length) {
    let string = str.charAt(index)
    if (/\d/.test(string)) {
      count += string
      index ++
    } else {
      break
    }
  }
  if (count == '') {
    return 0
  }
  count = abs ? Number(count): - Number(count)
  if (count > 2147483647) {
    count = 2147483647
  }
  if (count < -2147483648) {
    count = -2147483648
  }
  return count
};

const str = "-+1"

console.log(myAtoi(str))