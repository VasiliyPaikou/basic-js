const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

	if (!(arr instanceof Array)) {
		throw  Error("'arr' parameter must be an instance of the Array!");
	}
	if (arr.length === 0) {
		return []
	}
	let newArr = arr.slice()
	if (arr.indexOf('--discard-next') > -1) {
		if (newArr.indexOf('--discard-next') == newArr.length - 1) {
			newArr.splice(newArr.indexOf('--discard-next'), 1)
		} else {
			newArr.splice(newArr.indexOf('--discard-next'), 2, ' ')
		}

	}
	if (arr.indexOf('--double-next') > -1) {
		if (newArr.indexOf('--double-next') == newArr.length - 1) {
			newArr.splice(newArr.indexOf('--double-next'), 1)
		} else {
			newArr.splice(newArr.indexOf('--double-next'), 1, newArr[newArr.indexOf('--double-next') + 1])
		}
	}
	if (arr.indexOf('--discard-prev') > -1) {
		if (newArr.indexOf('--discard-prev') === 0) {
			newArr.splice(newArr.indexOf('--discard-prev'), 1)
		} else {
			newArr.splice(newArr.indexOf('--discard-prev') - 1, 2)
		}
	}
	if (newArr.indexOf('--double-prev') > -1) {
		if (newArr.indexOf('--double-prev') === 0) {
			newArr.splice(newArr.indexOf('--double-prev'), 1)
		} else {
			newArr.splice(newArr.indexOf('--double-prev'), 1, newArr[newArr.indexOf('--double-prev') - 1])
		}
	}
	return newArr.filter(a => a !== ' ')
}

module.exports = {
	transform
};
