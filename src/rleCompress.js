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
  const pattern = /(\w)(\1)*/g;
  const groups = source.match(pattern);
  let validString = '';

  if (source.length === 0) {
    return '';
  }

  for (let i = 0; i < groups.length; i++) {
    if (groups[i].length === 1) {
      validString += groups[i][0];
    } else {
      validString += groups[i][0] + groups[i].length;
    }
  }

  return validString;
}

module.exports = rleCompress;
