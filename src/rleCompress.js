'use strict';

function rleCompress(source) {
  let compressedString = '';
  let letterCount = 1;

  for (let i = 0; i < source.length; i++) {
    if (source[i] !== source[i - 1]) {
      if (letterCount > 1) {
        compressedString += letterCount;
        letterCount = 1;
      }

      compressedString += source[i];
    } else if (i === source.length - 1) {
      letterCount++;
      compressedString += letterCount;
    } else {
      letterCount++;
    }
  }

  return compressedString;
}

module.exports = rleCompress;
