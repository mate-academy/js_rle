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
  let compressedSource = '';
  let count = 1;

  for (let i = 0; i < source.length; i++) {
    const beforeItem = source[i];
    const nextItem = source[i + 1];

    if (beforeItem === nextItem) {
      count++;
    } else if (count > 1) {
      compressedSource += beforeItem + String(count);
      count = 1;
    } else {
      compressedSource += beforeItem;
    }
  }

  return compressedSource;
}

module.exports = rleCompress;
