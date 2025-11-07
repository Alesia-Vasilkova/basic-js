const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  checkisArray(value, level = 0) {
    if (Array.isArray(value)){
      return value.reduce((acc, elem) => {
        const newlevel = this.checkisArray(elem, level + 1);
        if (newlevel > acc) {
          return newlevel;
        }
        return acc;
      }, level + 1);
      
    }
    return level;
  }

  calculateDepth(arr) {
    return this.checkisArray(arr);
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
