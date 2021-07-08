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
  // write code here
  let resultString = '';
  for (let i = 0; i < source.length; i++) {
    let duplCounter = 1;
    while (i < source.length && source.charAt(i) === source.charAt(i + 1)) {
      duplCounter++;
      i++;
    }

    resultString += source.charAt(i);
    if (duplCounter > 1) {
      resultString += duplCounter;
    }
  }

  return resultString;
}

module.exports = rleCompress;
