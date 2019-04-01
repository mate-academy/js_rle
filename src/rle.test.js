'use strict';

const rle = require('./rle');

test('Short string', () => {
  expect(rle('AAAB')).toBe('A3B');
});

test('Medium string', () => {
  expect(rle('BCCDDDAXXXX')).toBe('BC2D3AX4');
});

test('Long string', () => {
  expect(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD')).toBe('AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
});
