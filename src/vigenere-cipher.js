const { NotImplementedError } = require('../lib');

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
    constructor(mode = true) {
      this.mode = mode;
    }

    vigenereCipher(text, keyword, encrypt = false) {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = '';
      let keywordIndex = 0;

      for (let i = 0; i < text.length; i++) {
          const textChar = text[i].toUpperCase();
          const keywordChar = keyword[keywordIndex % keyword.length].toUpperCase();

          if (!alphabet.includes(textChar)) {
              result += text[i]; 
              continue;
          }

          const textIndex = alphabet.indexOf(textChar);
          const keywordIndexInAlphabet = alphabet.indexOf(keywordChar);

          let shiftedIndex;
          if (encrypt) {
              shiftedIndex = (textIndex + keywordIndexInAlphabet) % 26;
          } else {
              shiftedIndex = (textIndex - keywordIndexInAlphabet + 26) % 26;
          }

          result += alphabet[shiftedIndex];
          keywordIndex++;
      }

      return result;
  }

  reverse(value) {
    const arr = value.split("").reverse();
    return arr.join("");
  }

  encrypt(...rest) {
    if (rest.length < 2 || !rest[0] || !rest[1]) {
      return 'Incorrect arguments!';
    }
    const [text, key] = rest;
    const value = this.vigenereCipher(text, key, true);
    if (this.mode) {
      return value;
    }
    return this.reverse(value);
  }

  decrypt(...rest) {
    if (rest.length < 2 || !rest[0] || !rest[1]) {
      return 'Incorrect arguments!';
    }
    const [text, key] = rest;
    const value = this.vigenereCipher(text, key);
    if (this.mode) {
      return value;
    }
    return this.reverse(value);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
