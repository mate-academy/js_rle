'use strict';

/**
 *  * fs_on_dec19_salogubova
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
  let compressedString = '';
  let counter = 1;

  for (let i = 0; i < source.length; i++) {
    if (source[i] === source[i + 1]) {
      counter += 1;
    } else if (counter > 1) {
      compressedString += source[i];
      compressedString += counter;
      counter = 1;
    } else {
      compressedString += source[i];
    }
  }

  return compressedString;
}

module.exports = rleCompress;
