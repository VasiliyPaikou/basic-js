const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date){
if (date === undefined) {
	return 'Unable to determine the time of year!'
}
// if (isNaN(Date.parse(date))) {
// 	throw new Error('Invalid date!');
// 	}
if (!(date instanceof Date)) {
	throw new Error('Invalid date!');
}
// if (!(Object.prototype.toString.call(date) == '[object Date]')) {
// 	throw new Error('Invalid date!');
// }
// if (!(date.getTime)) {
// 	throw new Error('Invalid date!');
	
// }
if ( Object.keys(date).length > 0 ) {
	throw new Error('Invalid date!');
}
	let seasons = {
	'winter': [0,1,11],
	'spring': [2,3,4],
	'summer': [5,6,7],
	'autumn': [8,9,10],
	}
	let date1 = new Date(date).getMonth()
	for (const key in seasons) {
	if (seasons[key].includes(date1)) {
	return key
	}
	}
	}

module.exports = {
  getSeason
};
