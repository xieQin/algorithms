// 第一个只出现一次的字符
// 在字符串中找出第一个只出现一次的字符，例如输入字符串“abaccdef”，输出“b”

const findFirstLetter = string => {
  let map = {}, res = ''
  for (let i = 0; i < string.length; i ++) {
    let temp = string[i]
    if (res.indexOf(temp) > -1) {
      res = res.replace(string[i], '')
    } else {
      res += string[i]
    }
  }
  return res[0]
}

console.log(findFirstLetter('abaccdef'))

// 字符流中第一个只出现一次的字符