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
  const str = source + ' ';
  let sortAbc = '';
  let count = 1;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      sortAbc += str[i];

      if (count !== 1) {
        sortAbc += String(count);
        count = 1;
      }
    }
  }

  return sortAbc;
}

module.exports = rleCompress;
