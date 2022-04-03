const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	console.log(domains);
	if (domains === []) {
		return {}
	}
	let arr = []
	let arr1 = []
	let arr2 = []
	let arr3 = []
	let arr4 = []
	let result = {}
	for (let i = 0; i < domains.length; i++) {
		domains[i] = '.' + domains[i]
		arr.push(domains[i].match(/\.\w+$/).join())
		domains[i] = domains[i].replace(/\.\w+$/, '')
		arr1.push(domains[i].match(/\.\w+$/).join())
		domains[i] = domains[i].replace(/\.\w+$/, '')
		if (domains[i].length !== 0) {
			arr2.push(domains[i].match(/^\.\w+/).join())
		} else {
			arr2.push('')
		}
	}
	for (let i = 0; i < domains.length; i++) {
		if (arr2[i] === '') {
			arr4.push(arr[i] + arr1[i])
		} else {
			arr3.push(arr[i] + arr1[i] + arr2[i])
			arr4.push(arr[i] + arr1[i])
		}
	}
	for (let i = 0; i < arr.length; i++) {
		if (typeof result[arr[i]] === "undefined") {
			result[arr[i]] = 1
		} else {
			result[arr[i]] = result[arr[i]] + 1
		}
	}
	for (let i = 0; i < arr4.length; i++) {
		if (typeof result[arr4[i]] === "undefined") {
			result[arr4[i]] = 1
		} else {
			result[arr4[i]] = result[arr4[i]] + 1
		}
	}
	for (let i = 0; i < arr3.length; i++) {
		if (typeof result[arr3[i]] === "undefined") {
			result[arr3[i]] = 1
		} else {
			result[arr3[i]] = result[arr3[i]] + 1
		}
	}
	return result
}

module.exports = {
	getDNSStats
};
