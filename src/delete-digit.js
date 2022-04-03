const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	console.log(n);
	let stack = []
	let arr = Array.from(String(n))
	for (let i = 0; i < arr.length; i++) {
		let c = arr.slice()
		c.splice(i, 1)
		stack.push(+(c.join('')))
	}
	stack.sort((a, b) => b - a)
	return +stack[0]
}

module.exports = {
	deleteDigit
};
