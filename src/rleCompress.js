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
  const arrSource = source.split('');
  const arrOut = [];
  let count = 1;

  for (let i = 0; i < arrSource.length; i++) {
    if (arrSource[i] === arrSource[i + 1]) {
      count++;
    } else if (count > 1) {
      arrOut.push(arrSource[i]);
      arrOut.push(count);
      count = 1;
    } else {
      arrOut.push(arrSource[i]);
    }
  }

  return arrOut.join('');
}
module.exports = rleCompress;
