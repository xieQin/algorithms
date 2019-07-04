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
  
}

const s = "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"

console.log(longestPalindrome(s))