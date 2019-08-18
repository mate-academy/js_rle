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
  let sourceCompress = '';
  let countMatch = 0;
  const updateSourceCompress = (index) => {
    if (countMatch > 0) {
      sourceCompress += source[index - 1] + (countMatch + 1);
    } else {
      sourceCompress += source[index - 1];
    }
    countMatch = 0;
  };

  if (source.length < 2) {
    return source;
  }

  for (let i = 1; i < source.length; i++) {
    if (source[i] === source[i - 1]) {
      countMatch++;
      if (i === source.length - 1) {
        updateSourceCompress(i);
      }
    } else {
      updateSourceCompress(i);
      if (i === source.length - 1) {
        updateSourceCompress(i + 1);
      }
    }
  }

  return sourceCompress;
}

module.exports = rleCompress;
