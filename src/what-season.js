const { NotImplementedError } = require("../extensions/index.js");

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
  if (arguments.length === 0) return "Unable to determine the time of year!";
  if (!(date instanceof Date) || Object.entries(date).length) {
    throw Error("Invalid date!");
  }
  const month = date.getMonth();
  switch (month) {
    case 0:
    case 1:
    case 11:
      return "winter";
    case 3:
    case 4:
    case 2:
      return "spring";
    case 6:
    case 7:
    case 5:
      return "summer";
    case 9:
    case 10:
    case 8:
      return "fall";
  }
}

// console.log(getSeason({ John: "Smith" }));
// console.log(getSeason());

module.exports = {
  getSeason,
};
