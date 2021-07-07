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
  if (!source || source === '') {
    return '';
  }

  const compressed = source.match(/([A-Z])\1*/gi);

  return compressed
    .map(char => {
      if (char.length === 1) {
        return char;
      }

      return [char.charAt(0), char.length].join('');
    })
    .join('');
}

module.exports = rleCompress;
