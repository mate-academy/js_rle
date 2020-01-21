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
  if (source === '') {
    return '';
  }

  const sourceArr = source.split('');

  sourceArr.push('_');
  sourceArr.unshift('_');

  const compressedSourse = [];
  let counter = 1;

  for (let i = 1; i < sourceArr.length; i += 1) {
    if (sourceArr[i] === sourceArr[i - 1]) {
      counter += 1;
    }

    if (sourceArr[i] !== sourceArr[i - 1] && counter > 1) {
      compressedSourse.push(sourceArr[i - 1]);
      compressedSourse.push(counter);
      counter = 1;
    }

    if (sourceArr[i] !== sourceArr[i - 1] && sourceArr[i] !== sourceArr[i + 1]
      && counter === 1) {
      compressedSourse.push(sourceArr[i]);
    }
  }

  if (compressedSourse.length === 0 && counter > 1) {
    compressedSourse.push(sourceArr[0]);
    compressedSourse.push(counter);
  }

  const result = compressedSourse.join('').replace('_', '');

  return result;
}

module.exports = rleCompress;
