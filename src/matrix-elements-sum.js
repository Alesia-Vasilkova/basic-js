const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const res = matrix.reduce((acc, arr, i) => {
    const reducedVal = arr.reduce((sum, num, j) => {
      if (i === 0 || matrix[i - 1][j] !== 0 ) {
        return sum + num;
      }
      return sum;
    }, 0);
    return acc + reducedVal;
  }, 0);
  return res;
}

module.exports = {
  getMatrixElementsSum
};
