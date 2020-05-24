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
  const sourseArray = source.split('');
  let counter = 1;
  const compressedArray = [];

  for (let i = 0; i < sourseArray.length; i++) {
    if (sourseArray[i] === sourseArray[i + 1]) {
      counter++;
    } else if (sourseArray[i] !== sourseArray[i + 1] && counter === 1) {
      compressedArray.push(sourseArray[i]);
    } else {
      compressedArray.push(sourseArray[i], counter);
      counter = 1;
    }
  }

  return compressedArray.join('');
}

module.exports = rleCompress;
