const { sortTestRunner } = require('./utils')

function _mergeSortedArrays (arr1, arr2) {
	const mergedArray = []
	let arr1Idx = 0
	let arr2Idx = 0
	while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
		if (arr1[arr1Idx] < arr2[arr2Idx]) {
			mergedArray.push(arr1[arr1Idx])
			arr1Idx++
			continue
		}
		mergedArray.push(arr2[arr2Idx])
		arr2Idx++
	}
	const pushRest = (rest, idx) => {
		for (let i =idx; i < rest.length; i++) {
			mergedArray.push(rest[i])
		}
	}
	if (arr1Idx < arr1.length) pushRest(arr1, arr1Idx)
	if (arr2Idx < arr2.length) pushRest(arr2, arr2Idx)
	return mergedArray
}


function mergeSort (arr) {
	const length = arr.length
	if (length === 1) return arr
	const middle = Math.floor(length / 2)
	const left = arr.slice(0, middle)
	const right = arr.slice(middle)
	return _mergeSortedArrays(mergeSort(left), mergeSort(right))
}

module.exports = {
  mergeSort
}
