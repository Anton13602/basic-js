const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
    let str = String(n).split('');
    let arr = []
    for (let i = 0; i < str.length; i++) {
      let rest = str.map((item, index) => {
        if (index === i) {
          return ''
        }else {
          return item
        }})
        arr.push(+rest.join(''))
    }
    let result = arr.sort((a,b) => b - a)
    return result[0]
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
