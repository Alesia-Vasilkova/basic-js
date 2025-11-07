const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const res = members.reduce((acc, elem) => {
    if (typeof elem === 'string') {
      acc.push(elem.trim().charAt(0).toUpperCase());
    }
    return acc;
  }, []);
  res.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    return -1;
  });
  if (!res.length){
    return false;
  }
  return res.join("");
}

module.exports = {
  createDreamTeam
};
