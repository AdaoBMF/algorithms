const { sortTestRunner } = require('./utils')

function bubbleSort (arr) {
  let isSorted = false
  while (!isSorted) {
    let switchCount = 0
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          const aux = arr[i]
          arr[i] = arr[j]
          arr[j] = aux
          switchCount++
        }
      }
    }
    isSorted = switchCount === 0
  }
  return arr
}

module.exports = {
  bubbleSort
}
