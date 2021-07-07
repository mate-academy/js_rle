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
  const sourceArr = source.split('');
  const sourceLetterCount = [];
  let countLetters = 1;

  while (sourceArr.length > 0) {
    if (sourceArr[0] === sourceArr[1]) {
      sourceLetterCount.push(sourceArr[0]);
      countLetters++;
      sourceArr.splice(0, 1);

      while (sourceArr[0] === sourceArr[1]) {
        countLetters++;
        sourceArr.splice(0, 1);
      }

      sourceLetterCount.push(countLetters);
      sourceArr.splice(0, 1);
      countLetters = 1;
    } else {
      sourceLetterCount.push(sourceArr[0]);
      sourceArr.splice(0, 1);
    }
  }

  return sourceLetterCount.join('');
}

module.exports = rleCompress;
