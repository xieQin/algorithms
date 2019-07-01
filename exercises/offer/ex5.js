// 替换空格
const replaceSpace = s => {
  return s.split(' ').join('%20')
}

const string = 'We are happy'

console.log(replaceSpace(string))