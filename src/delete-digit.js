const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strFromNum = n + "";
  let max = +strFromNum.slice(1, strFromNum.length);
  for (let i = 1; i < strFromNum.length; i++) {
    let withoutChar =
      strFromNum.slice(0, i) + strFromNum.slice(i + 1, strFromNum.length);
    if (+withoutChar > max) max = +withoutChar;
  }
  return max;
}

module.exports = {
  deleteDigit,
};
