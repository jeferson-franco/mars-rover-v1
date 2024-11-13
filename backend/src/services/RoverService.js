class RoverService {
  constructor() {
    this.directions = ['N', 'E', 'S', 'W'];
  }

  validatePlateau(x, y) {
    return x >= 0 && y >= 0;
  }

  validatePosition(x, y, plateauX, plateauY) {
    return x >= 0 && x <= plateauX && y >= 0 && y <= plateauY;
  }

  validateInstructions(instructions) {
    return /^[LRM]+$/.test(instructions);
  }

  moveRover(position, instructions, plateauX, plateauY) {
    let [x, y, direction] = position.split(' ');
    x = parseInt(x);
    y = parseInt(y);

    if (!this.validatePosition(x, y, plateauX, plateauY)) {
      throw new Error('Invalid initial position');
    }

    if (!this.validateInstructions(instructions)) {
      throw new Error('Invalid instructions');
    }

    let directionIndex = this.directions.indexOf(direction);

    for (let instruction of instructions) {
      switch (instruction) {
        case 'L':
          directionIndex = (directionIndex - 1 + 4) % 4;
          break;
        case 'R':
          directionIndex = (directionIndex + 1) % 4;
          break;
        case 'M':
          const newPosition = this.calculateNewPosition(
            x,
            y,
            this.directions[directionIndex],
          );

          if (
            this.validatePosition(
              newPosition.x,
              newPosition.y,
              plateauX,
              plateauY,
            )
          ) {
            x = newPosition.x;
            y = newPosition.y;
          } else {
            throw new Error('Movement would place rover outside plateau');
          }
          break;
      }
    }

    return `${x} ${y} ${this.directions[directionIndex]}`;
  }

  calculateNewPosition(x, y, direction) {
    switch (direction) {
      case 'N':
        return { x, y: y + 1 };
      case 'E':
        return { x: x + 1, y };
      case 'S':
        return { x, y: y - 1 };
      case 'W':
        return { x: x - 1, y };
      default:
        throw new Error('Invalid direction');
    }
  }
}

module.exports = RoverService;
