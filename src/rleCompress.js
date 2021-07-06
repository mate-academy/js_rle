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
  const compressResult = [];

  for (let i = 0; i < source.length;) {
    let counter = 0;
    let n = i;

    for (; n < source.length; n++) {
      if (source[i] !== source[n]) {
        break;
      }
      counter++;
    }

    if (counter > 1) {
      compressResult.push(source[i] + (counter));
      i = n;
    } else {
      compressResult.push(source[i]);
      i++;
    }
  }
  return compressResult.join('');
}

module.exports = rleCompress;
