const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
	let stack = []
	let ebalovo = []
	for (let i = 0; i < names.length; i++) {
	if (stack.indexOf(names[i]) === -1) {
	stack.push(names[i])
	} else {
	ebalovo.push(`${names[i]}(1)`)
	if (ebalovo.indexOf(names[i]) !== -1) {
	console.log(names[i]);
	let count = 0
	for (let j = 0; j < ebalovo.length; j++) {
	if (names[i] === ebalovo[j]) {
	count += 1
	}
	}
	stack.push(`${names[i]}(${count})`)
	} else {
	let count = 0
	for (let j = 0; j < i; j++) {
	if (names[i] === names[j]) {
	count += 1
	}
	}
	stack.push(`${names[i]}(${count})`)
	}
	}
	}
	return stack
	}

module.exports = {
  renameFiles
};
