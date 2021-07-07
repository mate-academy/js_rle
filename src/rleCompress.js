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
  let char = '';
  let res = '';
  let counter = 0;
  const leters = source.split('');
  for (let i = 0; i < leters.length; i++) {
    if (char !== leters[i]) {
      char = leters[i];
      if (counter > 0) {
        counter++;
        res = res + counter;
      }
      res = res + char;
      counter = 0;
    } else {
      counter++;
    }
  }
  if (counter > 0) {
    counter++;
    res = res + counter;
  }
  return res;
}

module.exports = rleCompress;
