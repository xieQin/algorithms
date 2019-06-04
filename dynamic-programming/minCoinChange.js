const coins = [1,3,4]

let resMap = {}
/**
 * 最少硬币找零问题
 * 带备忘录的自顶向下递归解决
 * @param {*} money 
 */
const minCoinChange = (money) => {
  if (resMap[money]) {
    return resMap[money]
  } else {
    if (coins.includes(money)) {
      let result = {
        count: 1,
        value: [money]
      }
      resMap[money] = result
      return result
    }
    let q = Infinity, res = []
    for (let i = 0; i < coins.length; i++ ) {
      if (money - coins[i] > 0) {
        let temp = minCoinChange(money - coins[i])
        resMap[money - coins[i]] = temp
        if (temp.count < q) {
          q = temp.count
          res = temp.value.concat(coins[i])
        }
      }
    }
    return {
      count: q + 1,
      value: res
    }
  }
}


let resGreedyMap = {}
/**
 * 贪心算法解决
 * @param {*} money 
 */
const minCoinChangeGreedy = (money) => {
  if (resGreedyMap[money]) {
    return resGreedyMap[money]
  } else {
    if (coins.includes(money)) {
      let data = {
        count: 1,
        value: [money]
      }
      resGreedyMap[money] = data
      return data
    } else {
      for (let i = coins.length - 1; i >= 0; i-- ) {
        if(coins[i] <= money && money > 0) {
          let data = minCoinChangeGreedy(money - coins[i])
          return {
            count: data.count + 1,
            value: data.value.concat(coins[i])
          }
        }
      }
    }
  }
}


console.log(minCoinChange(6))
console.log(minCoinChangeGreedy(6))