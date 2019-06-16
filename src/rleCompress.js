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
  let comprString = '';
  let counter = '';
  let currentWord = '';
  let prewWord = '';
  for (let i = 0; i < source.length; i++) {
    if (i === source.length - 1 && prewWord === source[i]) {
      currentWord = source[i];
      (counter === '') ? counter = counter + 2 : counter++;
      comprString = comprString + currentWord + counter;
    } else if (i === source.length - 1 && prewWord !== source[i]) {
      currentWord = source[i];
      comprString = comprString + prewWord + counter + currentWord;
    } else if (prewWord === source[i]) {
      currentWord = source[i];
      prewWord = source[i];
      (counter === '') ? counter = counter + 2 : counter++;
    } else {
      currentWord = source[i];
      comprString = comprString + prewWord + counter;
      prewWord = source[i];
      counter = '';
    }
  }
  return comprString;
  // write code here
}

module.exports = rleCompress;
