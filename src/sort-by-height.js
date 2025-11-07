const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const target = -1;
  const indices = [];
  const toForEach = arr.forEach((num, i) => {
    if (num === target){
      indices.push(i);
    }
  })
  const toSort = arr.filter(item => item !== target).sort((a, b) => a - b);
  for (let i = 0; i < indices.length; i++) {
    toSort.splice(indices[i], 0, target);
  }
  return toSort;
}

module.exports = {
  sortByHeight
};
