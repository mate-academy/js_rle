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
  const res = [];
  const arrSource = source.split('');
  let count = 1;

  for (let i = 0; i < arrSource.length; i++) {
    if (arrSource[i] === arrSource[i + 1]) {
      count++;
    } else if (arrSource[i] !== arrSource[i + 1] && count === 1) {
      res.push(arrSource[i]);
    } else {
      res.push(arrSource[i], count);
      count = 1;
    }
  }

  return res.join('');
}

module.exports = rleCompress;
