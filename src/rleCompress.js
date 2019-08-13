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
  let coutn = 1;
  let returnSourse = '';
  for (let i = 0; i < source.length; i++) {
    if (source[i] === source[i + 1]) {
      coutn++;
    } else {
      if (coutn === 1) {
        returnSourse += source[i];
      } else {
        returnSourse += source[i] + coutn;
        coutn = 1;
      }
    }
  }
  return returnSourse;
}

module.exports = rleCompress;
