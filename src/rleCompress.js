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
  // write code here
  let compressedString = '';
  let amountFollowingLetters = 0;

  for (let i = 0; i < source.length; i++) {
    const currentLetter = source[i];

    if (currentLetter !== compressedString[compressedString.length - 1]) {
      if (amountFollowingLetters > 1) {
        compressedString += amountFollowingLetters + currentLetter;
      } else {
        compressedString += currentLetter;
      }
      amountFollowingLetters = 0;
    }
    amountFollowingLetters++;
  }
  if (amountFollowingLetters > 1) {
    compressedString += amountFollowingLetters;
  }
  return compressedString;
}

module.exports = rleCompress;
