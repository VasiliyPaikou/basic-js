const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let count = 0
	let a1 = Array.from(s1).sort()
	let a2 = Array.from(s2).sort()
	let aA1 = a1
	let aA2 = a2
	let c = a1.length
	if (a1.length !== a2.length) {
		a1.length > a2.length ? (c = a1.length, aA1 = a1, aA2 = a2) : (c = a2.length, aA1 = a2, aA2 = a1)
	}
	let i = 0
	while (i < c) {
		for (let j = 0; j < aA2.length; j++) {
			if (aA1[i] === aA2[j]) {
				count += 1
				aA2.splice(j, 1)
				break
			}
		}
		i++
	}
	return count
}

module.exports = {
	getCommonCharacterCount
};
