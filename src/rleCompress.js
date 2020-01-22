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
  const sourceArr = source.split('');
  let counter = 0;
  let letter = '';

  for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i] === sourceArr[i + 1]) {
      counter++;
      letter = sourceArr[i];
    }

    if ((sourceArr[i] === sourceArr[i - 1])
    && (sourceArr[i] !== sourceArr[i + 1])) {
      sourceArr.splice(i - counter, ++counter, letter + Number(counter));
      counter = 0;
      i = 0;
    }
  }

  return sourceArr.join('');
}

module.exports = rleCompress;
