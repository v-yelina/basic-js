const { NotImplementedError } = require("../extensions/index.js");

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
  const minusOneIndexes = [];
  const withoutMinusOne = [];
  for (let i in arr) {
    if (arr[i] === -1) {
      minusOneIndexes.push(i);
    } else {
      withoutMinusOne.push(arr[i]);
    }
  }
  withoutMinusOne.sort((a, b) => a - b);
  const sortedArr = [];
  for (let i in arr) {
    if (minusOneIndexes.indexOf(i) !== -1) {
      sortedArr.push(-1);
    } else {
      sortedArr.push(withoutMinusOne[0]);
      withoutMinusOne.shift();
    }
  }
  return sortedArr;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

module.exports = {
  sortByHeight,
};
