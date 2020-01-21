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
  let count = 1;
  let result = '';
  let lastChar;

  for (const symbol of source) {
    if (symbol !== lastChar) {
      if (count > 1) {
        lastChar = symbol;
        result += count + symbol;
        count = 1;
      } else {
        lastChar = symbol;
        result += symbol;
      }
    } else {
      count += 1;
    }
  }

  if (count > 1) {
    result += count;
  }

  return result;
}

module.exports = rleCompress;
