const GridValidator = require('../utils/GridValidator');

class MarsRover {
  constructor(x, y, direction) {
    this.validator = new GridValidator(10, 10);

    if (!this.validator.isValidDirection(direction)) {
      throw new Error('Invalid direction');
    }

    if (!this.validator.isValidPosition(x, y)) {
      throw new Error('Invalid initial position');
    }

    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  execute(commands) {
    const commandArray = commands.split('');
    for (const command of commandArray) {
      this.processCommand(command);
    }
  }

  processCommand(command) {
    switch (command) {
      case 'M':
        this.moveForward();
        break;
      case 'B':
        this.moveBackward();
        break;
      case 'L':
        this.rotateLeft();
        break;
      case 'R':
        this.rotateRight();
        break;
      default:
        throw new Error('Invalid command');
    }
  }

  moveForward() {
    let newX = this.x;
    let newY = this.y;

    switch (this.direction) {
      case 'N':
        newY++;
        break;
      case 'S':
        newY--;
        break;
      case 'E':
        newX++;
        break;
      case 'W':
        newX--;
        break;
    }

    if (this.validator.isValidPosition(newX, newY)) {
      this.x = newX;
      this.y = newY;
    }
  }

  moveBackward() {
    let newX = this.x;
    let newY = this.y;
    switch (this.direction) {
      case 'N':
        newY--;
        break;
      case 'S':
        newY++;
        break;
      case 'E':
        newX--;
        break;
      case 'W':
        newX++;
        break;
    }

    if (this.validator.isValidPosition(newX, newY)) {
      this.x = newX;
      this.y = newY;
    }
  }

  rotateLeft() {
    const directions = ['N', 'W', 'S', 'E'];
    const currentIndex = directions.indexOf(this.direction);
    this.direction = directions[(currentIndex + 1) % 4];
  }

  rotateRight() {
    const directions = ['N', 'E', 'S', 'W'];
    const currentIndex = directions.indexOf(this.direction);
    this.direction = directions[(currentIndex + 1) % 4];
  }

  getPosition() {
    return {
      x: this.x,
      y: this.y,
      direction: this.direction,
    };
  }
}

module.exports = MarsRover;
