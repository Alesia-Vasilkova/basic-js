const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  const commandDoublePrev = '--double-prev';
  const commandDoubleNext = '--double-next';
  const commandDiscardPrev = '--discard-prev';
  const commandDiscardNext = '--discard-next';
  const result = arr.reduce((acc, num, i) => {
    const prev = acc.length - 1 > 0 ? acc[acc.length - 1] : undefined;
    const next = arr[i + 1];
    const mainprev = arr[i - 1];
    if (prev === 'skip') {
      acc.pop();
      return acc;
    }
    if (num === commandDoublePrev) {
      if (prev !== undefined) {
        if (prev === mainprev) {
          acc.push(prev);
        }
      }
    } else if (num === commandDoubleNext) {
      if (next !== undefined) {
        acc.push(next);
      }
    } else if (num === commandDiscardPrev) {
      if (prev !== undefined) {
        if (prev === mainprev) {
          acc.pop();
        }
      }
    } else if (num === commandDiscardNext) {
      if (next !== undefined) {
        acc.push('skip');
      }
    } else {
      acc.push(num);
    }
    return acc;
  }, []);
  return result;
}

module.exports = {
  transform
};
