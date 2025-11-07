const { NotImplementedError } = require('../lib');

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
  const newarr = matrix.reduce((acc, arr) => {
    const length = arr.length;
    acc.push(new Array(length).fill(0));
    return acc;
  }, []);
  matrix.forEach((line, i) => {
    line.forEach((elem, j) => {
      if (elem) {
        const startI = i - 1 > 0 ? i - 1 : 0;
        const endI = i + 1 < matrix.length ? i + 1 : matrix.length - 1;
        const startJ = j - 1 > 0 ? j - 1 : 0;
        const endJ = j + 1 < matrix.length ? j + 1 : matrix.length - 1;
  
        for (let l = startI; l <= endI; l += 1) {
          for (let k = startJ; k <= endJ; k += 1) {
            if (l !== i || k !== j) {
              newarr[l][k] += 1;
            }
          }
        }
      }
    });
  });
  return newarr;
}

module.exports = {
  minesweeper
};
