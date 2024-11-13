const { GridValidator } = require('../../../src/utils/GridValidator');

describe('GridValidator Tests', () => {
  const validator = new GridValidator(10, 10);

  test('should validate positions within bounds', () => {
    expect(validator.isValidPosition(5, 5)).toBe(true);
    expect(validator.isValidPosition(0, 0)).toBe(true);
    expect(validator.isValidPosition(9, 9)).toBe(true);
  });

  test('should invalidate positions outside bounds', () => {
    expect(validator.isValidPosition(-1, 5)).toBe(false);
    expect(validator.isValidPosition(5, -1)).toBe(false);
    expect(validator.isValidPosition(10, 5)).toBe(false);
    expect(validator.isValidPosition(5, 10)).toBe(false);
  });
});
