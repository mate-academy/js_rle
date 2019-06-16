'use strict';

/**
 * Implement rleCompress function:
 *
 * Function takes string argument and returns compressed string.
 * Compression algorithm is the following: 2 and more identical
 * letters in a row are replaced with the letter and count of
 * repeating (don’t add number 1 for one letter)
 *
 * rle('A') === 'A'
 * rle('ABC') === 'ABC'
 * rle('AABDE') === 'A2BDE'
 * rle('ABGGGDKKKUKKF') === 'ABG3DK3UK2F'
 *
 * @param {string} source
 *
 * @return {string}
 */
function rleCompress(source) {
  let result = source;

  for (let i = 0; i < result.length; i++) {
    if (result[i] === result[i + 1]) {
      const letters = result[i] + result[i] + '+';
      const lettersRegExp = new RegExp(letters);

      const arrayOfResult = lettersRegExp.exec(result);
      const compressedLetters = result[i] + arrayOfResult[0].length;

      result = result.replace(lettersRegExp, compressedLetters);
    }
  }

  return result;
}

module.exports = rleCompress;
