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
  let result = ""
  for (let i = 0; i < source.length; i++) {
    let count = 1;
    result = result + source[i];
    for (let j = i + 1; j < source.length; j++) {
      if (source[i] == source[j] && j == source.length - 1) {
        count++;
        i = source.length;
      } else if (source[i] == source[j]) {
        count++;
      } else {
        i = j - 1;
        j = source.length;
      }
    }
    if (count >= 2) {
      result = result + count;
    }
  }
  return result;
}

module.exports = rleCompress;
