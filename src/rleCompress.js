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
function rleCompress(src) {
  let counter = 0;
  let result = '';
  for (let i = 0; i < src.length; i++) {
    counter++;
    if (src[i] !== src[i + 1]) {
      if (counter === 1) {
        result += src[i];
        counter = 0;
        continue;
      }
      result += src[i] + counter;
      counter = 0;
    }
  }
  return result;
}

module.exports = rleCompress;
