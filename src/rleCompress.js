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
  if (!source) {
    return '';
  }

  let compressedString = '';
  let currentSymbol = source[0];
  let groupLength = 1;

  for (let i = 1; i < source.length; i++) {
    if (source[i] === currentSymbol) {
      groupLength++;
    } else {
      if (groupLength > 1) {
        compressedString += currentSymbol + groupLength;
      } else {
        compressedString += currentSymbol;
      }
      currentSymbol = source[i];
      groupLength = 1;
    }
  }

  if (groupLength < 2) {
    compressedString += currentSymbol;
  } else {
    compressedString += currentSymbol + groupLength;
  }

  return compressedString;
}

module.exports = rleCompress;
