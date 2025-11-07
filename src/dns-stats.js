const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const red1 = domains.reduce((acc, elem) => {
    const spl1 = elem.split('.').reverse();
    const red2 = spl1.reduce((s, w) => {
      const newword = s + '.' + w;
      if (!acc[newword]) {
        acc[newword] = 0;
      }
      acc[newword] += 1;
      return newword;
    }, '');
    return acc;
  }, {});
  return red1;
}

module.exports = {
  getDNSStats
};
