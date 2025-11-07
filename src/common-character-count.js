const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const splS1 = s1.split("");
  const splS2 = s2.split("");
  const reduceObj = splS1.reduce((acc, letter) => {
    if (!acc[letter]) {
      acc[letter] = 0;
    }
    acc[letter] += 1;
    return acc;
  }, {});
  const res = splS2.reduce((acc, letter) => {
    if (reduceObj[letter] && reduceObj[letter] > 0) {
      reduceObj[letter] -= 1;
      return acc + 1;
    }
    return acc;
  }, 0);
  return res;
}

module.exports = {
  getCommonCharacterCount
};
