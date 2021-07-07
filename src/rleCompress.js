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
  const arrayToCompress = [...source];
  const matchedElementsArray = [];

  const callback = (item, index, arr) => {
    if (arr[index] === arr[index - 1]) {
      matchedElementsArray.push(index);
    }
  };
  arrayToCompress.forEach(callback);

  let count = 1;
  for (let i = matchedElementsArray.length - 1; i > -1; i--) {
    if (matchedElementsArray[i] - 1 === matchedElementsArray[i - 1]) {
      count++;
    } else {
      arrayToCompress.splice(matchedElementsArray[i], count, count + 1);
      count = 1;
    };
  }

  return arrayToCompress.join('');
}
rleCompress('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD');
module.exports = rleCompress;
