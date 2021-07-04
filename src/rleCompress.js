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
  const rleCompressed = [];
  let count = 1;
  for (const i in source) {
    if (source[i] !== source[i - 1]) {
      rleCompressed.push(source[i]);
      count = 1;
    } else if (source[i] === source[i - 1]) {
      if (count > 2) {
        rleCompressed.pop();
        rleCompressed.push(count);
      } else {
        rleCompressed.push(count);
      }
    }
    count++;
  }

  return rleCompressed.join('');
}

module.exports = rleCompress;
