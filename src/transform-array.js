const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  console.log(arr)
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
    //return 'parameter must be an instance of the Array!';
  }
  let arr2 = arr.slice()
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === '--discard-next') {
      arr2[i] = undefined
      arr2[i + 1] = undefined
    }
    if (arr2[i] === '--discard-prev') {
      arr2[i] = undefined
      arr2[i - 1] = undefined
    }
    if (arr2[i] === '--double-next') {
      arr2[i] = arr[i + 1]
    }
    if (arr2[i] === '--double-prev') {
      arr2[i] = arr2[i - 1]
    }
  }
  let result = []
  for (let val of arr2) {
    if (val !== undefined) {
      result.push(val)
    }
  }
  console.log(result)
  console.log(arr2)
  return (result)
  // remove line with error and write your code here
}

module.exports = {
  transform
};
