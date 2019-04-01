'use strict';

const sum = require('./index');

test('add two numbers 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});
