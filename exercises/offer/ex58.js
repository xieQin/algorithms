// 翻转字符串
// 题目一：翻转单词顺序
// 输入一个英文句子，翻转句子中的单词，但单词内字符的顺序不变，标点符号和单词一样处理
// 例如，输入字符串“I am a student.”，输出“student. a am I”

const reverseString = string => {
 let s = string.split(' ')
 let i = s.length - 1, result = []
 while(i >= 0) {
  result.push(s[i])
  i --
 }
 return result.join(' ')
}

const string = 'I am a student.'

console.log(reverseString(string))

// 题目二：左旋转字符串
// 字符串的左旋转是将字符串的前若干个字符转移到字符串末尾
// 定义一个函数实现字符串的左旋转
// 例如，输入字符串“abcdefg”和数字2，输出“cdefgab”

const leftRotateString = (string, k) => {
  let leftStr = string.slice(0, k)
  let rightStr = string.slice(- (string.length - k))
  return rightStr + leftStr
}

const string2 = 'abcdefg'
const k = 2

console.log(leftRotateString(string2, 2))