const { NotImplementedError } = require("../extensions/index.js");

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
  let character = str[0];
  let count = 0;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    count += 1;
    if (str[i + 1] !== character) {
      if (count === 1) {
        result += character;
      } else {
        result += count + character;
      }

      character = str[i + 1];
      count = 0;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
