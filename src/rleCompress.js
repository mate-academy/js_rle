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
  const array = [...source.split('')];
  const newArray = [];
  const callback = (item, index, arr) => {
    if (arr[index] === arr[index - 1]) {
      newArray.push(index);
    }
  };
  array.forEach(callback);
  let count = 1;
  for (let i = newArray.length - 1; i > -1; i--) {
    if (newArray[i] - 1 === newArray[i - 1]) {
      count++;
    } else {
      array.splice(newArray[i], count, count + 1);
      count = 1;
    };
  }
  return array.join('');
}
module.exports = rleCompress;
