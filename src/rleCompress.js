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
  const arrSingls = [];
  const exampleSourse = source.split('');

  for (let i = 0; i < exampleSourse.length; i++) {
    if (exampleSourse[i] !== exampleSourse[i - 1]) {
      arrSingls.splice(i, 0, exampleSourse[i]);
    } else if (exampleSourse[i] === exampleSourse[i - 1]) {
      arrSingls.splice(i, 0, 1);
    }
  }

  for (let i = 0; i < arrSingls.length; i++) {
    if (typeof arrSingls[i] === 'number'
    && typeof arrSingls[i + 1] === 'number') {
      arrSingls[i] = arrSingls[i] + 1;
      arrSingls.splice(i + 1, 1);
      i--;
    } else if (typeof arrSingls[i] === 'number'
    && typeof arrSingls[i - 1] === 'string') {
      arrSingls[i] = arrSingls[i] + 1;
    };
  }

  return arrSingls.join('');
}

module.exports = rleCompress;
