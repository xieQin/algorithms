/** 
 * 暴力法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(typeof s === 'string' && s.length <= 1) {
    return s
  }
  let count = 1, i = 0, str = s[0]
  while( i < s.length) {
    let j = i + 1
    while(j < s.length) {
      if (isAvaliable(s, i, j)) {
        if ((j - i + 1) >= count) {
          str = s.substr(i, j - i + 1)
        }
        count = Math.max(count, j - i + 1)
      }
      j ++
    }
    i ++
  }
  return str
};

const isAvaliable = (s, i, j) => {
  let temp = s.substr(i, j - i + 1)
  let reverse = ''
  for (let n = j; n >= i; n --) {
    reverse += s[n]
  }
  return temp === reverse
}

/** 
 * 中心扩展法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function(s) {
  if (typeof s == 'string' && s.length <= 1) {
    return s
  }
  let start = 0, end = 1, count = 1
  for (let i = 0; i < s.length; i ++) {
    let len1 = extendStringFromCenter(s, i, i)
    let len2 = extendStringFromCenter(s, i, i + 1)
    count = Math.max(len1, len2, count)
    if (count >= (end - start + 1)) {
      start = i - (count - 1) / 2
      end = i + count / 2
    }
  }
  start = Math.ceil(start)
  return s.substr(start, count)
}

var extendStringFromCenter = function (s, i, j) {
  while(i >= 0 && j < s.length && s[i] === s[j]) {
    i --
    j ++
  }
  return j - i - 1
}

const s = "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"
// const s = "cbbd"
// console.log(longestPalindrome(s))
console.log(longestPalindrome2(s))