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
  const countedLetters = [];
  const templateSourсe = source.split('');

  for (let i = 0; i < templateSourсe.length; i++) {
    if (templateSourсe[i] !== templateSourсe[i - 1]) {
      countedLetters.splice(i, 0, templateSourсe[i]);
    } else if (templateSourсe[i] === templateSourсe[i - 1]) {
      countedLetters.splice(i, 0, 1);
    }
  }

  for (let i = 0; i < countedLetters.length; i++) {
    if (typeof countedLetters[i] === 'number'
    && typeof countedLetters[i + 1] === 'number') {
      countedLetters[i] = countedLetters[i] + 1;
      countedLetters.splice(i + 1, 1);
      i--;
    } else if (typeof countedLetters[i] === 'number'
    && typeof countedLetters[i - 1] === 'string') {
      countedLetters[i] = countedLetters[i] + 1;
    };
  }

  return countedLetters.join('');
}

module.exports = rleCompress;
