'use strict';

/**
 * Implement rle function:
 * Function gets string and returns new string
 * 2 and more identical letters in a row
 * are replaced with the letter and count of repeating
 * (don't add number 1 for one letter)
 *
 * @param {string} source
 *
 * @return {string}
 *
 * rle('ABC') === 'ABC'
 * rle('AABDE') === 'A2BDE'
 * rle('ABGGGDKKKUKKF') === 'ABG3DK3UK2F'
 *
 */

function rle(source) {
  let counter = 0;
  let result = '';

  for (let i = 0; i < source.length; i++) {
    let current = source[i];
    let next = source[i + 1];

    if (current === next) {
      counter++;
    } else {
      result += current;

      if (counter > 0) {
        result += counter + 1;
      }

      counter = 0;
    }
  }

  return result;
}

module.exports = rle;
