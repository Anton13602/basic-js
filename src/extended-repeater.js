const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  let repeat = (options.repeatTimes !== undefined)? options.repeatTimes: 1
  let separator = (options.separator !== undefined)? options.separator: '+'
  let add = (options.addition !== undefined)? options.addition: ''
  let additionNun = (options.additionRepeatTimes !== undefined)? options.additionRepeatTimes: 1
  let additionSeparator = (options.additionSeparator !== undefined)? options.additionSeparator: '|'

  let strAdd = (add + additionSeparator).repeat(`${additionNun}`)

  let result = (str + strAdd.slice(0, strAdd.length - additionSeparator.length) + separator).repeat(`${repeat}`)

  return result.slice(0, result.length - separator.length)
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
