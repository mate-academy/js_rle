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
  if (source === '') {
    return '';
  }

  if (source.length === 1) {
    return source;
  }

  const matchedLetters = source.match(/(.)\1+/g)
    .sort((a, b) => b.length - a.length);
  const map = {};
  const regExp = new RegExp(matchedLetters.join('|'), 'gi');
  let result = '';

  for (const letter of matchedLetters) {
    map[letter] = letter[0] + letter.length;
  }

  result = source.replace(regExp, function(matched) {
    return map[matched];
  });

  return result;
}

module.exports = rleCompress;
