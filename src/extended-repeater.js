const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const getString = (toRepeat, times = 1, separator = "", addition = undefined) => {
    let result = '';
    
    for (let i = 0; i < times; i++) {
      result += toRepeat + (addition && addition.addition !== undefined ? getString(addition.addition, addition.additionRepeatTimes, addition.additionSeparator) : "");
      if (i < times - 1) {
        result += separator ? separator : (addition ? "+" : "|");
      }
    }
    return result;
  };
  return getString(str, options.repeatTimes, options.separator, options);
}

module.exports = {
  repeater
};
