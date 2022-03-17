const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  //throw new NotImplementedError('Not implemented');
  /* let arr = String(n).split('')
    let res = arr.reduce((sum, val) => {
      return sum + (+val)
    }, 0)
    if (res <= 9) {
      console.log(res)
      return res
    } else {
      getSumOfDigits(res)
    } */
  let arr = String(n).split('')
  while (arr.length !== 1) {
    let res = arr.reduce((sum, val) => {
      return sum + (+val)
    }, 0)
    arr = String(res).split('')
  }
  
  return +arr[0]
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
