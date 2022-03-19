const { NotImplementedError } = require("../extensions/index.js");

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

// str is a string to repeat;
// options is an object of options, that contains properties:
// repeatTimes sets the number of repetitions of the str;
// separator is a string separating repetitions of the str;
// addition is an additional string that will be added to each repetition of the str;
// additionRepeatTimes sets the number of repetitions of the addition;
// additionSeparator is a string separating repetitions of the addition.
// The str and addition parameters are strings by default. In case when type of these parameters is different, they must be converted to a string.

// separator and additionSeparator parameters are strings.

// repeatTimes and additionRepeatTimes are integer numbers (in the absence of any of them, the corresponding string is not repeated).

// The only indispensable parameter is str, any others may be not defined. separator default value is '+'. additionSeparator default value is '|'.

// For example: repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
function repeater(str, options) {
  if (Object.keys(options).length > 0) {
    let result = [];
    let opt;
    opt = options;
    if (!opt.hasOwnProperty("repeatTimes")) opt.repeatTimes = 1;
    if (
      opt.hasOwnProperty("addition") &&
      !opt.hasOwnProperty("additionRepeatTimes")
    ) {
      opt.additionRepeatTimes = 1;
    }
    if (
      opt.hasOwnProperty("addition") &&
      !opt.hasOwnProperty("additionSeparator")
    ) {
      opt.additionSeparator = "|";
    }
    if (!opt.hasOwnProperty("separator")) opt.separator = "+";
    for (let i = 0; i < opt.repeatTimes; i++) {
      result.push(str + "");
      if (opt.hasOwnProperty("addition")) {
        for (let j = 0; j < opt.additionRepeatTimes; j++) {
          result.push(opt.addition + "");
          result.push(opt.additionSeparator);
        }
        result.pop();
      }
      result.push(opt.separator);
    }
    return result.slice(0, result.length - 1).join("");
  }
  return str;
}

console.log(
  repeater("STRING", {
    repeatTimes: 3,
    separator: "**",
    addition: "PLUS",
    additionRepeatTimes: 3,
    additionSeparator: "00",
  })
);

module.exports = {
  repeater,
};
