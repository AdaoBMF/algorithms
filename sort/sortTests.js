const { bubbleSort } = require('./bubbleSort')
const { mergeSort } = require('./mergeSort')
const { quickSort } = require('./quickSort')
const { sortTestRunner } = require('./utils')

const algorithms = [quickSort, bubbleSort, mergeSort]

function runTest(arrayLength) {
  for (const algorithm of algorithms) {
    sortTestRunner(arrayLength, algorithm)
  }
}
runTest(1000)
