const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
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
  calculateDepth(arr) {
    let maxDepth = 1;

    for (let index = 0; index < arr.length; index++) {
      if (typeof arr[index] === "object") {
        let currentDepth = 1;
        currentDepth += this.calculateDepth(arr[index]);
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth;
        }
      }
    }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
