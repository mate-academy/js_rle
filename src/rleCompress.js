'use strict';

/**
 * Implement rleCompress function:
 *
 * Function takes string argument and returns compressed string.
 * Compression algorithm is the following: 2 and more identical
 * items in a row are replaced with the item and countSameLetters of
 * repeating (don’t add number 1 for one item)
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
  let shortSource = '';
  let letter = '';
  let countSameLetters = 1;

  for (const item of source) {
    if (item !== letter) {
      letter = item;
      if (countSameLetters > 1) {
        shortSource += countSameLetters;
        countSameLetters = 1;
      }
      shortSource += letter;
      continue;
    }
    countSameLetters++;
  }

  if (countSameLetters > 1) {
    shortSource += countSameLetters;
  }

  return shortSource;
}

module.exports = rleCompress;
