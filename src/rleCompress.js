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
  const compressedSource = [];
  let repeat = 1;
  let symbol = '';

  for (let i = 0; i < source.length; i++) {
    if (source[i] !== source[i + 1]
      && source[i] !== symbol) {
      compressedSource.push(source[i]);
    } else if (source[i] === symbol
      && source[i + 1] === symbol) {
      repeat++;
    } else if (source[i] === symbol
      && source[i + 1] !== symbol) {
      repeat++;
      compressedSource.push(symbol);
      compressedSource.push(repeat);
      repeat = 1;
      symbol = '';
    } else {
      symbol = source[i];
    }
  }
  return compressedSource.join('');
}

module.exports = rleCompress;
