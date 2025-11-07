const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const obj = names.reduce((acc, str) => {
    if (!acc[str]) {
      acc[str] = 1;
    } else if (acc[str]){
      acc[str] = 0;
    }
    return acc;
  }, {});
  const result = names.reduce((acc, file) => {
    if(!acc.includes(file)) {
      acc.push(file);
    } else if (acc.includes(file)) {
      acc.push(file + "(" + obj[file] + ")");
      obj[file] += 1;
    }
    return acc;
  }, []);
  return result;
}

module.exports = {
  renameFiles
};
