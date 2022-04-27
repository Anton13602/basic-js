const { NotImplementedError } = require('../extensions/index.js');

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
    let counter = 1;
      if (Array.isArray(arr)) {
        let result = []
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
            console.log(arr[i])
            let newArr = [...arr[i]]
            result.push(newArr)
          }
        }
        if (result.length !== 0) {
          return counter + this.calculateDepth(result.flat())
        }
      } 
   
  return counter
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
