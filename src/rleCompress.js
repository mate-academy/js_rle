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
  const tmp = [...source];
  const result = [tmp[0]];
  let counter = 1;

  for (let i = 1; i < tmp.length; i++) {
    if (tmp[i] === result[0]) {
      counter++;
    } else {
      if (counter !== 1) {
        result.unshift(counter);
        counter = 1;
      }
      result.unshift(tmp[i]);
    }
  }
  if (counter !== 1) {
    result.unshift(counter);
  }
  return result.reverse().join('');
}

module.exports = rleCompress;
