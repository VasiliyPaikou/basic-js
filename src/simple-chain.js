const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
	n: [],
	addLink(value) {
		if (value === undefined) {
			this.n.push(' ')
		} else{
			this.n.push(value)
		}
		return this
	},
	removeLink(position) {
		if (Number.isInteger(position) && position <= this.n.length && position >= 1) {
			this.n.splice(position - 1, 1)
		return this
		} else{
			this.n = []
			throw new Error("You can't remove incorrect link!");
		}
	},
	reverseChain() {
	this.n.reverse()
	return this
	},
	finishChain() {
		let finish = this.n.slice()
		this.n = []
		let result = ''
		for (let i = 0; i < finish.length; i++) {
	result += `~( ${finish[i]} )~`
		}
		return result.substr(1, result.length-2)
	},
	getLength() {
		return this.n.length;
	},
};

module.exports = {
  chainMaker
};
