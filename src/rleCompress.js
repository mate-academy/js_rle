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
  let str = '';
  let c = 1;

  function letterCount(n) {
    if (source.charAt(n) !== source.charAt(n + 1)) {
      if (c < 2) {
        return source.charAt(n);
      } else {
        return source.charAt(n) + c;
      }
    } else {
      c++;

      return letterCount(n + 1);
    }
  }

  for (let i = 0; i < source.length; i = i + c) {
    c = 1;

    str = str + letterCount(i);
  }

  return str;
}

module.exports = rleCompress;
