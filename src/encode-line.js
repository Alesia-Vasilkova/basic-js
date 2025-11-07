const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const splS1 = str.split('');
  const reduceArr = splS1.reduce((acc, letter) => {
    let last = acc.length ? acc[acc.length - 1] : undefined;
    if (!last || last.letter !== letter) {
      acc.push({letter: letter, val: 0});
      last = acc[acc.length - 1];
    }
    last.val += 1;
    return acc;
  }, []);
  const res = reduceArr.reduce((acc, elem) => {
    const toadd = (elem.val > 1 ? elem.val : "") + elem.letter;
    return acc + toadd;
  }, "");
  return res;
}

module.exports = {
  encodeLine
};
