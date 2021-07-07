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
  if (source.length === 0) {
    return '';
  }

  let counter = 1;
  let resultStr = source[0];

  for (let i = 1; i < source.length; i++) {
    if (resultStr.endsWith(source[i])) {
      counter++;
    } else if (counter > 1) {
      resultStr += counter;
      counter = 1;
      resultStr += source[i];
    } else {
      resultStr += source[i];
    }
  }

  if (counter > 1) {
    resultStr += counter;
  }

  return resultStr;
}

module.exports = rleCompress;
