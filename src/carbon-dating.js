const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5.73e3;
  
  if (sampleActivity === '' || Number(sampleActivity) > MODERN_ACTIVITY ||  sampleActivity < 0 || !(typeof(sampleActivity) === 'string') || isNaN(sampleActivity)) {
    return false
  }

  let k = Math.log(2) / HALF_LIFE_PERIOD
  let t = Math.log(MODERN_ACTIVITY / sampleActivity) / k
  return (t === Infinity)? false: Math.ceil(t)
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
