const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	let intro = options
	const subOject = {
		stack: [],
		subStack: [],
		r: intro.repeatTimes,
		v: intro.additionRepeatTimes,
		repeatTimes() {
			typeof str !== 'string' && typeof intro.addition !== 'string' ? ((str = String(str)), (intro.addition = String(intro.addition))) : ((str = str), (intro.addition = intro.addition))
			intro.addition !== undefined ? add = intro.addition : add = ''
			intro.additionSeparator !== undefined ? der = intro.additionSeparator : der = '|'
			intro.separator !== undefined ? sep = intro.separator : sep = '+'
			intro.additionRepeatTimes === undefined ? this.v = 1 : this.v = intro.additionRepeatTimes
			intro.repeatTimes === undefined ? this.r = 1 : this.r = intro.repeatTimes
			let y = 0
			let i = 0
			while (y < this.v) {
				this.subStack.push(add)
				this.subStack.push(der)
				y++
			}
			this.subStack.pop()
			while (i < this.r) {
				this.stack.push(str)
				this.stack.push(this.subStack.join(''))
				this.stack.push(sep)
				i++
			}
			this.stack.pop()
			return this.stack.join('')
		}
	}
	return subOject.repeatTimes()
}

module.exports = {
	repeater
};
