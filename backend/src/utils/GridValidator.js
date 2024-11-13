class GridValidator {
  constructor(maxX, maxY) {
    this.maxX = maxX;
    this.maxY = maxY;
  }

  isValidPosition(x, y) {
    return x >= 0 && x < this.maxX && y >= 0 && y < this.maxY;
  }

  isValidDirection(direction) {
    return ['N', 'S', 'E', 'W'].includes(direction);
  }
}

module.exports = GridValidator;
