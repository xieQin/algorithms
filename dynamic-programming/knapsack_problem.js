let Products = [{
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

const splice = (array, index) => {
  let n = []
  for (let i = 0; i < array.length; i++ ) {
    if (i != index) {
      n.push(array[i])
    }
  }
  return n
}

const findMax = (array, w) => {
  let r = 0, q = []
  for (let i = 0; i < array.length; i++ ) {
    if (array[i].weight == w && array[i].value >= r) {
      r = array[i].value
      q.push(array[i])
    }
  }
  return {
    value: r,
    list: q
  }
}

/**
 * 0-1背包问题
 * @param {*} p 
 * @param {*} w 
 */
const knapsack_problem = (p, w) => {
  if (w <= 0) {
    return {
      value: 0,
      list: []
    }
  }
  let r = findMax(p, w)
  let q = r.value, res = 0, list = r.list
  for (let i = 0 ; i < p.length; i++ ) {
    let _p = p[i]
    let _w = _p.weight
    let _v = _p.value
    if (w - _w > 0) {
      let temp = knapsack_problem(splice(p, i), w - _w)
      if (temp.value >= q) {
        q = temp.value
        res = _v
        list = temp.list.concat(_p)
      }
    }
  }
  return {
    value: q + res,
    list: list
  }
}

Products = Products.sort((a, b) => a.value > b.value)
// console.log(Products)
console.log(knapsack_problem(Products, 12))