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
  const letters = source.split('');
  const compressed = [];
  let quantityOfDouble = 1;

  for (let i = 0; i < letters.length; i += 1) {
    if (letters[i] === letters[i + 1]) {
      quantityOfDouble += 1;
    } else {
      if (quantityOfDouble === 1) {
        compressed.push(letters[i]);
      } else {
        compressed.push(letters[i]);
        compressed.push(quantityOfDouble);
        quantityOfDouble = 1;
      }
    }
  }

  return compressed.join('');
}

module.exports = rleCompress;
