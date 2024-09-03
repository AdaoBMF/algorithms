function _generateRandomArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 10000)) // Generates random integers between 0 and 9999
  }
  return array
}

function sortTestRunner (arraySize, fn) {
  const label = `Function: ${fn.name}\nArray length: ${arraySize}\nTime: `
  console.time(label)
  const arr = _generateRandomArray(arraySize)
  console.log(fn(arr))
  console.timeEnd(label)
}

module.exports = {
  sortTestRunner
}
