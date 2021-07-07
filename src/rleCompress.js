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
  let count = 0;

  if (source.length === 0) {
    return '';
  }

  for (let i = 0; i < source.length; i++) {
    count++;

    if (source[i] !== source[i + 1]) {
      str += source[i];
      if (count > 1) {
        str += count;
      }
      count = 0;
    }
  }
  return str;
}

module.exports = rleCompress;
