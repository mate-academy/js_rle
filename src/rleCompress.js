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
  let currentElement = '';
  let counter = 0;

  for (let i = 0; i < source.length; i++) {
    currentElement = source[i];
    counter++;

    // check if the next element is different from the current.
    if (source[i + 1] !== currentElement) {
      if (counter >= 2) {
        compressedString += currentElement + counter;
      } else {
        compressedString += currentElement;
      }
      counter = 0; // reset counter
    }
  }

  return compressedString;
}

console.log(rleCompress('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
module.exports = rleCompress;
