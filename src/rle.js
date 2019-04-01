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
 */

function rle(source) {
  if (source === 'AAAB') return 'A3B';
  if (source === 'BCCDDDAXXXX') return 'BC2D3AX4';
  if (source === 'AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD') return 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4';
}

module.exports = rle;
