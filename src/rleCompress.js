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
function rleCompress(string) {
  let result = '';
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === result[result.length - 1]) {
      count++;
    } else {
      if (count > 1) {
        result += count;
        count = 1;
      }
      result += string[i];
    }
  }
  if (count > 1) result += count;
  return result;
}

module.exports = rleCompress;
