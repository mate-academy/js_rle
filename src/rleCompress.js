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
  let currentLetter = source[0];
  let counter = 1;
  let currentString = '';

  for (let i = 1; i <= source.length; i++) {
    if (source[i] === currentLetter) {
      counter++;
    } else if (source[i] !== currentLetter) {
      counter = counter === 1 ? '' : counter;

      currentString += currentLetter + counter;

      currentLetter = source[i];
      counter = 1;
    }
  }

  return currentString;
}

module.exports = rleCompress;
