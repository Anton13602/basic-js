const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  let arr2= []
  let domain = ''
  for (let item of domains) {
    let arr = item.split('.').reverse()
    for (let value of arr) {
      domain += '.' + value
      arr2.push(domain)
    }
    domain = ''
  }
    
  let result = arr2.reduce((obj, item) => {
    console.log(obj[item])
    obj[item] = obj[item] ? obj[item] + 1 : 1;
    console.log(obj)
    return obj
  }, {});
 
  return result
  console.log(result)
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
