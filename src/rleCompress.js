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
  let count = 1;
  const arrCompress = [];
  source.split('').forEach((item, index) => {
    if (item === source[index + 1]) {
      count++;
    } else if (count > 1) {
      arrCompress.push(item + count);
      count = 1;
    } else {
      arrCompress.push(item);
    }
  });

  return arrCompress.join('');
}

module.exports = rleCompress;
