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
  let result = '';

  if (source.length === 0) {
    return result;
  }

  let count = 1;
  let currentLetter = source[0];

  for (let i = 1; i < source.length; ++i) {
    if (currentLetter === source[i]) {
      ++count;
    } else {
      count > 1 ? result += currentLetter + count : result += currentLetter;
      count = 1;
      currentLetter = source[i];
    }
  }
  count > 1 ? result += currentLetter + count : result += currentLetter;

  return result;
}

module.exports = rleCompress;
