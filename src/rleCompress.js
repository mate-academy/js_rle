// jshint esversion:6
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
  let isCount = false;
  let count = 0;
  let holder = 0;
  const answer = [];

  for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i] === sourceArr[i + 1]) {
      count++;
      holder = i;
      isCount = true;
    } else if (!isCount) {
      answer.push(sourceArr[i]);
    } else {
      answer.push(sourceArr[holder]);
      answer.push(count + 1);
      isCount = false;
      count = 0;
    }
  }
  return answer.join('');
}

module.exports = rleCompress;
