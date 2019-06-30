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
function rleCompress(source2) {
  const source = source2.split('').filter(item => (item >= 'A' && item <= 'z'));
  let startIndex = 0;
  let isGoDelete = false;
  let deleteCount = 0;

  for (let i = 1; i < source.length; i++) {
    if (source[i - 1] === source[i]) {
      ++deleteCount;
    } else {
      isGoDelete = true;
    }

    if (isGoDelete || i === source.length - 1) {
      const replaser = source[i - 1] + '' + (deleteCount + 1);

      if (deleteCount > 0) {
        source.splice(startIndex, deleteCount + 1, replaser);
      }

      startIndex = i - deleteCount;
      deleteCount = 0;
      isGoDelete = false;
      i = startIndex;
    }
  }

  return source.join('');
}

module.exports = rleCompress;
