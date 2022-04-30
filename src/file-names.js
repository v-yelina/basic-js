const { NotImplementedError } = require("../extensions/index.js");

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
  let namesLib = {};
  let resultNames = [];
  for (let name of names) {
    if (!namesLib.hasOwnProperty(name)) {
      resultNames.push(name);
      namesLib[name] = 0;
    } else {
      namesLib[name] += 1;
      const newName = name + `(${namesLib[name]})`;
      resultNames.push(newName);
      if (!namesLib.hasOwnProperty(newName)) {
        namesLib[newName] = 0;
      } else {
        namesLib[newName] += 1;
      }
    }
  }
  return resultNames;
}

console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

module.exports = {
  renameFiles,
};
