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
  let result = '';
  let collector = '';

  for (let i = 0; i < source.length; i++) {
    collector += source[i];

    if (source[i] !== source[i + 1]) {
      result += countLetters(collector);
      collector = '';
    }

    if (i === source.length - 1) {
      result += countLetters(collector);
    }
  }

  return result;
}

function countLetters(str) {
  if (str.length > 1) {
    return str[0] + str.length;
  }

  return str;
}

module.exports = rleCompress;
