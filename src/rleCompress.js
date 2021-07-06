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
  let str = '';

  for (let i = 0; i < source.length; i++) {
    if (source[i] === source[i + 1]) {
      let i2 = i;

      while (source[i] === source[i2]) {
        i2++;
      }
      str += source[i] + (i2 - i);
      i = i2 - 1;
    } else {
      str += source[i];
    }
  }

  return str;
}

module.exports = rleCompress;
