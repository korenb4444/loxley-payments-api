const { quoteKey } = require('../src/payments/fx');

test('same pair and minute give the same key', () => {
  expect(quoteKey('GBPEUR', 1)).toBe(quoteKey('GBPEUR', 1));
});
