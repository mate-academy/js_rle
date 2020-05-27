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
  const sourceArray = source.split('');
  let count = 1;

  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] === sourceArray[i + 1]) {
      count++;
    } else if (sourceArray[i] !== sourceArray[i + 1] && count > 1) {
      sourceArray.splice(i + 1 - count, count, sourceArray[i] + count);
      count = 1;
      i = 0;
    } else if (sourceArray[i] === sourceArray[i + 1]
      && i === sourceArray.length - 1 && count > 1) {
      sourceArray.splice(i + 1 - count, count, sourceArray[i] + count);
    }
  }

  return sourceArray.join('');
}

module.exports = rleCompress;
