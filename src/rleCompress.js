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
  let answer = '';
  let count = 0;

  for (let i = 0; i <= source.length; i++) {
    //  тепер ми одвічно додаємо дані в лічильник
    count++;
    //  доки сусідні букви не припинять повторюватись

    if (source[i] !== source[i + 1]) {
      if (count >= 2) {
        //  Якщо лічильник перевищив двійку, то його слід записати у відповідь.
        answer += source[i] + count;
      } else {
        //  інакше, число лічильника, просто проігноруємо.
        answer += source[i];
      };
      //  і онулимо його
      count = 0;
    };
  }

  return answer;
}

module.exports = rleCompress;
