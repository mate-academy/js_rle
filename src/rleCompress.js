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
  if (source.length <= 1) {
    return source;
  }

  let letterCounter = 1;
  let compressedString = '';

  for (let i = 0; i < source.length; i++) {
    const lastLetter = source[i];

    if (lastLetter === source[i + 1]) {
      letterCounter += 1;
    }

    if (lastLetter !== source[i + 1]) {
      compressedString += lastLetter;

      if (letterCounter > 1) {
        compressedString += letterCounter;
        letterCounter = 1;
      }
    }
  }

  return compressedString;
}

module.exports = rleCompress;
