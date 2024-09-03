const binarySearch = (array, item) => {
  let low = 0
  let high = array.length - 1

  while (low <= high) {
    const half = Math.floor((low + high) / 2)
    const guess = array[half]
    if (guess === item) return half
    if (guess > item) {
      high = half - 1
    } else {
      low = half + 1
    }
  }
  return null
}

const list = [1, 3, 5, 7, 9]

console.log(binarySearch(list, 7))
