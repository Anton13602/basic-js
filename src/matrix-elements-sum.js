const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  let lengthY = matrix[0].length
  let sum = 0;
  for (let i = 0; i < lengthY; i++) {
    for (let j = 0; j < matrix.length - 1; j++) {
      
      if (matrix[j][i] === 0) {
        matrix[j + 1][i] = 0 
      } 
      //console.log(` item {${j}, ${i}}  ---  ${matrix[j][i]}`)
    }
  } 

  for (let k = 0; k < matrix.length; k++) {
    for (let n = 0; n < matrix[k].length; n++) {
      sum +=matrix[k][n]
    }
  }
  console.log(sum)
  return sum
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};
