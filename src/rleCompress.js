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
  let countDodle = 0;
  let comressedString = '';
  let currentSymbol = source[0];

  for (let i = 1; i <= source.length; i++) {
    if (currentSymbol === source[i]) {
      countDodle++;
    } else {
      if (countDodle) {
        currentSymbol = `${currentSymbol}${countDodle + 1}`;
      }

      comressedString += currentSymbol;
      currentSymbol = source[i];
      countDodle = 0;
    }
  }

  return comressedString;
}

module.exports = rleCompress;
