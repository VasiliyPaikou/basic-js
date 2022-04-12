const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
	constructor(flag = true){
	this.reverseflaf = flag
	}
	encrypt(string, key) {
	if (string === undefined || key === undefined ) {
	throw new Error('Incorrect arguments!')
	}
	let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let one = string.toUpperCase().split('')
	let ghg = key.toUpperCase().split('')
	let keyS = []
	let num = ''
	if (one.length > keyS.length) {
	for (let i = 0; i < one.length; i++) {
	ghg.length === 0 ? ghg = key.toUpperCase().split('') : ghg = ghg
	alpha.indexOf(one[i]) !== -1 ? (keyS.push(ghg[0]), ghg.shift()) : keyS.push(one[i])
	}
	}
	for (let i = 0; i < one.length; i++) {
	if (alpha.indexOf(one[i]) === -1) {
	num+=one[i]
	}else{
	if (alpha.indexOf(one[i]) + alpha.indexOf(keyS.join('')[i])>= alpha.length) {
	num += alpha[Math.abs((alpha.indexOf(one[i]) + alpha.indexOf(keyS.join('')[i]) - alpha.length))]
	}else{
	num += alpha[(alpha.indexOf(one[i]) + alpha.indexOf(keyS.join('')[i]))]
	}
	}
	}
	if (this.reverseflaf === false) return num.split('').reverse().join('')
	return num
	}
	decrypt(string, key) {
	if (string === undefined || key === undefined ) {
	throw new Error('Incorrect arguments!')
	}
	let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	let one = string.toUpperCase().split('')
	let ghg = key.toUpperCase().split('')
	let keyS = []
	let num = ''
	if (one.length > keyS.length) {
	for (let i = 0; i < one.length; i++) {
	ghg.length === 0 ? ghg = key.toUpperCase().split('') : ghg = ghg
	alpha.indexOf(one[i]) !== -1 ? (keyS.push(ghg[0]), ghg.shift()) : keyS.push(one[i])
	}
	}
	for (let i = 0; i < one.length; i++) {
	if (alpha.indexOf(one[i]) === -1) {
	num+=one[i]
	}else{
	if (alpha.indexOf(one[i]) - alpha.indexOf(keyS.join('')[i]) < 0) {
	num += alpha[Math.abs((alpha.indexOf(one[i]) + alpha.length - alpha.indexOf(keyS.join('')[i])))]
	}else{
	num += alpha[(alpha.indexOf(one[i]) - alpha.indexOf(keyS.join('')[i]))]
	}
	}
	}
	if (this.reverseflaf === false) return num.split('').reverse().join('')
	return num
	}
	}
	
module.exports = {
  VigenereCipheringMachine
};
