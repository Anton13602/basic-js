const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(name = true) {
    this.type = name;
  }
  encrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    if (message === undefined || key === undefined) throw new Error ("Incorrect arguments!");
    let messageArr = message.split(' ').join('').split('')
    let repeat = Math.ceil(messageArr.length / key.length)
    let resultKey = key.repeat(`${repeat}`).slice(0 , messageArr.length).split('')

    let index = message.split('').map((item, index) => {
      if (item === ' ') {
        return index
      }
    }).filter((value) => typeof(value) === 'number')

    console.log(index)

    let array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 
    

    let result = []
    
    for (let i = 0; i < messageArr.length; i++) {
      if (array.includes(messageArr[`${i}`].toUpperCase())) {
        let numSymbolC = array.indexOf(messageArr[`${i}`].toUpperCase()) + array.indexOf(resultKey[`${i}`].toUpperCase())
        if (numSymbolC > 25) {
          result.push(array[numSymbolC - 26])  
        } else {
          result.push(array[numSymbolC])  
        }    
      } else {
        result.push(messageArr[i])
      }
      
    }

    for (let j = 0; j < index.length; j++) {
      result.splice(index[j], 0, ' ')
    }

    console.log(result.join(''))
    return this.type? result.join(''): result.reverse().join('')
    // remove line with error and write your code here
  }
  decrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    if (message === undefined || key === undefined) throw new Error ("Incorrect arguments!");
    let messageArr = message.split(' ').join('').split('')
    let repeat = Math.ceil(messageArr.length / key.length)
    let resultKey = key.repeat(`${repeat}`).slice(0 , messageArr.length).split('')

    let index = message.split('').map((item, index) => {
      if (item === ' ') {
        return index
      }
    }).filter((value) => typeof(value) === 'number')

    console.log(index)

    let array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 
    

    let result = []

    for (let i = 0; i < messageArr.length; i++) {
      if (array.includes(messageArr[`${i}`].toUpperCase())) {
        let numSymbolM = array.indexOf(messageArr[`${i}`].toUpperCase()) - array.indexOf(resultKey[`${i}`].toUpperCase())

        if (numSymbolM < 0) {
          result.push(array[numSymbolM + 26])  
        } else {
          result.push(array[numSymbolM])  
        }    
      } else {
        result.push(messageArr[i])
      }
      
    }

    for (let j = 0; j < index.length; j++) {
      result.splice(index[j], 0, ' ')
    }

    console.log(result.join(''))
    return this.type? result.join(''): result.reverse().join('')
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
