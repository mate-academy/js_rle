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
  const lettersArr = source.split('');
  const compressedArr = [];
  let quantityOfDouble = 1;

  for (let i = 0; i < lettersArr.length; i += 1) {
    if (lettersArr[i] === lettersArr[i + 1]) {
      quantityOfDouble += 1;
    } else {
      if (quantityOfDouble === 1) {
        compressedArr.push(lettersArr[i]);
      } else {
        compressedArr.push(lettersArr[i]);
        compressedArr.push(quantityOfDouble);
        quantityOfDouble = 1;
      }
    }
  }

  return compressedArr.join('');
}

module.exports = rleCompress;
