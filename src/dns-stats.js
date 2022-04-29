const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsCount = {};
  for (let domain of domains) {
    let domainArr = domain.split(".").reverse();
    let domainStr = ".";
    for (let i = 0; i < domainArr.length; i++) {
      domainStr += domainArr[i];
      if (!domainsCount.hasOwnProperty(domainStr)) {
        domainsCount[domainStr] = 1;
      } else {
        domainsCount[domainStr] += 1;
      }
      domainStr += ".";
    }
  }
  return domainsCount;
}

// getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]);

module.exports = {
  getDNSStats,
};
