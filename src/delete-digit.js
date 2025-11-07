const { NotImplementedError } = require('../lib');

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
  const splitnum = n.toString().split("");
  const res = splitnum.reduce((acc, _elem, i) => {
    const num = parseInt(splitnum.filter((_s, j) => i !== j).join(""), 10);
    if (num > acc) {
      return num;
    }
    return acc;
  }, 0);
  return res;
}

module.exports = {
  deleteDigit
};
