const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === true) {
				matrix[i][j] = true
				console.log(matrix[i][j + 1]);
				if (matrix[i][j + 1] !== undefined)
					if (matrix[i][j + 1] === true) {
						matrix[i][j + 1] = true
					} else {
						if (matrix[i][j + 1] === false) {
							matrix[i][j + 1] = 1
						} else {
							matrix[i][j + 1] = matrix[i][j + 1] + 1
						}
					}
				if (matrix[i][j - 1] !== undefined)
					if (matrix[i][j - 1] === true) {
						matrix[i][j - 1] = true
					} else {
						if (matrix[i][j - 1] === false) {
							matrix[i][j - 1] = 1
						} else {
							matrix[i][j - 1] = matrix[i][j - 1] + 1
						}
					}
				if (matrix[i + 1][j] !== undefined)
					if (matrix[i + 1][j] === true) {
						matrix[i + 1][j] = true
					} else {
						if (matrix[i + 1][j] === false) {
							matrix[i + 1][j] = 1
						} else {
							matrix[i + 1][j] = matrix[i + 1][j] + 1
						}
					}
				if (i - 1 >= 0)
					if (matrix[i - 1][j] === true) {
						matrix[i - 1][j] = true
					} else {
						if (matrix[i - 1][j] === false) {
							matrix[i - 1][j] = 1
						} else {
							matrix[i - 1][j] = matrix[i - 1][j] + 1
						}
					}
				if (matrix[i + 1][j + 1] !== undefined)
					if (matrix[i + 1][j + 1] === true) {
						matrix[i + 1][j + 1] = true
					} else {
						if (matrix[i + 1][j + 1] === false) {
							matrix[i + 1][j + 1] = 1
						} else {
							matrix[i + 1][j + 1] = matrix[i + 1][j + 1] + 1
						}
					}
				if (matrix[i + 1][j - 1] !== undefined)
					if (matrix[i + 1][j - 1] === true) {
						matrix[i + 1][j - 1] = true
					} else {
						if (matrix[i + 1][j - 1] === false) {
							matrix[i + 1][j - 1] = 1
						} else {
							matrix[i + 1][j - 1] = matrix[i + 1][j - 1] + 1
						}
					}
				if (i - 1 >= 0)
					if (matrix[i - 1][j + 1] === true) {
						matrix[i - 1][j + 1] = true
					} else {
						if (matrix[i - 1][j + 1] === false) {
							matrix[i - 1][j + 1] = 1
						} else {
							matrix[i - 1][j + 1] = matrix[i - 1][j + 1] + 1
						}
					} if (i - 1 >= 0)
					if (matrix[i - 1][j - 1] === true) {
						matrix[i - 1][j - 1] = true
					} else {
						if (matrix[i - 1][j - 1] === false) {
							matrix[i - 1][j - 1] = 1
						} else {
							matrix[i - 1][j - 1] = matrix[i - 1][j - 1] + 1
						}
					}
			} else if( matrix[i][j] === false) {
				matrix[i][j] = 0
			}
			matrix[i][j] = matrix[i][j]
		}
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === true) {
				matrix[i][j] = 1
			}
		}
	}
	return matrix
}

module.exports = {
  minesweeper
};
