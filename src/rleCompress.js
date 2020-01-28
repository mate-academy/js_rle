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
  const result = source.split('');

  for (let i = 0; i < result.length; i++) {
    let counter = 1;

    if (result[i - 1] === result[i]) {
      while (result[i - 1] === result[i]) {
        result.splice(i, 1);
        counter++;
      }
      result.splice(i, 0, counter);
    }
  }

  return result.join('');
}

module.exports = rleCompress;
