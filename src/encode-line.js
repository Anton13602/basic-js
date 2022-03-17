const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  let counter = 0;
  let result = ''
  for(let i = 0; i < str.length; i++) {
    counter++ 
    if (!(str[i] === str[i + 1])){
      result += counter + str[i]
      //console.log(result)
      counter = 0
    }
  }
  let res = result.split('1').join('')
  return res
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
