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
  const newSource = source + ' ';
  let lastSymbol = source[0];
  let count = 1;
  let result = '';

  for (let i = 1; i < newSource.length; i++) {
    if (lastSymbol === newSource[i]) {
      count++;
    } else if (lastSymbol !== newSource[i] && count === 1) {
      result += lastSymbol;
      lastSymbol = newSource[i];
      count = 1;
    } else if (lastSymbol !== newSource[i] && count > 1) {
      result += lastSymbol + String(count);
      lastSymbol = newSource[i];
      count = 1;
    }
  }

  return result;
}

module.exports = rleCompress;
