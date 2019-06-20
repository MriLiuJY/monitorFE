const initMonitor = require('../../src/index');

test('test initMonitor', () => {
  expect(initMonitor(1)).toBe(2);
});