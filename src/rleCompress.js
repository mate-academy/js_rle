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
  if (source.length === 1) {
    return source;
  } else if (source === '') {
    return '';
  }

  let result = '';

  for (let i = 0; i < source.length; i++) {
    const currentChar = source[i];
    let counter = 1;

    while (currentChar === source[i + 1]) {
      counter += 1;
      i += 1;
    }

    if (counter > 1) {
      result += currentChar + counter;
    } else {
      result += currentChar;
    }
  }

  return result;
}

module.exports = rleCompress;
