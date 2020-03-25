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
  let res = '';

  for (let i = 0; i < source.length; i++) {
    let count = 1;

    while (source[i] === source[i + 1]) {
      count++;
      i++;
    }

    if (count > 1) {
      res += source[i] + count;
    } else {
      res += source[i];
    }
  }

  if (!source.length) {
    return '';
  } else {
    return res;
  }
}

module.exports = rleCompress;
