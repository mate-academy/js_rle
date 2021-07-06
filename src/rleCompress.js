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
  let counter = 1;
  let compressed = '';

  for (let i = 0; i < source.length; i++) {
    if (source[i] === source[i + 1]) {
      counter++;
    } else if (counter === 1) {
      compressed += source[i];
    } else {
      compressed += source[i] + counter;
      counter = 1;
    }
  }

  return compressed;
}

module.exports = rleCompress;
