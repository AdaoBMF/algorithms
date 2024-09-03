const { sortTestRunner } = require('./utils')

function quickSort (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallerIdx = i
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallerIdx]) {
        smallerIdx = j
      }
    }
    if (smallerIdx !== i) {
      const aux = arr[smallerIdx]
      arr[smallerIdx] = arr[i]
      arr[i] = aux
    }
  }
  return arr
}

module.exports = {
 quickSort 
}
