const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  
  const isValidDate = d => {
    try {
      return d.getMonth() !== undefined && (d instanceof Date && !isNaN(d));
    } catch (e) {
      return false;
    }
  };

  const seasons = ["winter", "spring", "summer", "autumn"];
  if (!isValidDate(date)) return "Invalid date!";
  
  const month = date.getMonth() + 1;
  if ([1,2,12].includes(month)) return seasons[0];
  if ([3,4,5].includes(month)) return seasons[1];
  if ([6,7,8].includes(month)) return seasons[2];
  if ([9,10,11].includes(month)) return seasons[3];
}

module.exports = {
  getSeason
};
