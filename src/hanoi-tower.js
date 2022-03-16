const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new NotImplementedError('Not implemented');
  let s = Math.pow(2, disksNumber) - 1;
  let t = Math.floor((3600 / turnsSpeed) * s)
  let result = {
    turns: s,
    seconds: t
  }
  
  return result
  // remove line with error and write your code here
}

module.exports = {
  calculateHanoi
};
