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
  let dublicateCounter = 0;
  let compressed = '';

  for (let char = 0; char < source.length; char++) {
    dublicateCounter++;
    if (source[char] !== source[char + 1]
      && source[char] !== source[char - 1]) {
      compressed += source[char];
      dublicateCounter = 0;
    } else if (source[char] !== source[char + 1]) {
      compressed += source[char] + dublicateCounter;
      dublicateCounter = 0;
    }
  }

  return compressed;
}

module.exports = rleCompress;
