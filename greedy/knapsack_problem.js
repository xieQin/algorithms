const Products = [{
  weight: 10,
  value: 19
}, {
  weight: 2,
  value: 4
}, {
  weight: 3,
  value: 11
}, {
  weight: 7,
  value: 8
}, {
  weight: 18,
  value: 29
}, {
  weight: 3,
  value: 8
}, {
  weight: 6,
  value: 12
}, {
  weight: 15,
  value: 6
}, {
  weight: 5,
  value: 21
}, {
  weight: 1,
  value: 3
}]

/**
 * 分数背包问题
 * @param {*} p 
 * @param {*} w 
 */
const fractional_knapsack_problem = (p, w) => {
  let list = p.map((i) => {
    i.per = i.value / i.weight
    return i
  })
  list = list.sort((a, b) => {
    return a.per < b.per
  })
  console.log(list)
  return greedy_fractional_knapsack_problem(list, w)
}

const greedy_fractional_knapsack_problem = (p, w) => {
  let r = 0
  for (let i = 0; i < p.length; i ++) {
    if (w > 0) {
      if(p[i].weight <= w) {
        w -= p[i].weight
        r += p[i].value
      } else {
        r += p[i].per * w
        w = 0
      }
    }
  }
  return r
}
console.log(fractional_knapsack_problem(Products, 13))