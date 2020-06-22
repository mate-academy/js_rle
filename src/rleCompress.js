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

  let compressedString = '';

  for (let i = 0; i < source.length; i++) {
    if (source[i] !== source[i + 1]) {
      compressedString += source[i];
    } else {
      let counter = 2;

      while (source[i] === source[i + counter]) {
        counter++;
      }

      compressedString += source[i] + counter;
      i += counter - 1;
    }
  }

  return compressedString;
}

module.exports = rleCompress;
