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
  for (let char of source.split('')) {
    let regex = new RegExp(`${char + "{2,}"}`, );
    if (source.match(regex) !== null) {
      source = source.replace(regex, `${char + source.match(regex)[0].length}`);
    }
  }
  return source;
}

module.exports = rleCompress;
