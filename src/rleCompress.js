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

  while (source.length > 0) {
    if (source.length === 1) {
      res += source[source.length - 1];
      break;
    }

    let count = 1;

    for (let j = 1; j < source.length; j++) {
      if (source[0] === source[j]) {
        count++;
        if (count === source.length) {
          res += source[0] + '' + count;
          return res;
        }
      } else {
        if (count === 1) {
          res += source[0];
        } else {
          res += source[0] + '' + count;
        }
        source = source.slice(j, source.length);
        break;
      }
    }
  }
  return res;
}

module.exports = rleCompress;
