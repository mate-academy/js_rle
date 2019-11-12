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
  const lettersList = source.split('');
  let dublicateCounter = 1;
  let compressionCounter = 1;

  for (let char = 0; char < lettersList.length; char++) {
    if (lettersList[char] === lettersList[char + 1]) {
      dublicateCounter++;
    } else if (dublicateCounter > 1) {
      const start = char - dublicateCounter + 2;
      const deleteCount = dublicateCounter - 1;

      lettersList.splice(start, deleteCount, dublicateCounter);
      dublicateCounter = 1;
      char -= compressionCounter;
      compressionCounter++;
    }
  }

  return lettersList.join('');
}

module.exports = rleCompress;
