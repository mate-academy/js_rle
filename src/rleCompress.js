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
  let resultString = '';

  for (let i = 0; i < source.length; i++) {
    let countOfRepeatingLetters = 1;
    let j = i;

    if (source[i + 1] !== source[i]) {
      resultString += source[i];
    } else {
      while (source[j + 1] === source[j]) {
        countOfRepeatingLetters++;
        j++;
      }
      resultString += source[i] + countOfRepeatingLetters;
      i += j - i;
    }
  }

  return resultString;
}
rleCompress('AABDE');
module.exports = rleCompress;
