const MarsRover = require('../../models/MarsRover');

describe('Mars Rover Unit Tests', () => {
  let rover;

  beforeEach(() => {
    rover = new MarsRover(0, 0, 'N');
  });

  describe('Basic Movement', () => {
    it('should move forward when facing North', () => {
      rover.execute('M');
      expect(rover.y).toBe(1);
      expect(rover.x).toBe(0);
    });

    it('should turn left when facing North', () => {
      rover.execute('L');
      expect(rover.direction).toBe('W');
    });

    it('should turn right when facing North', () => {
      rover.execute('R');
      expect(rover.direction).toBe('E');
    });

    it('should throw an error when the initial direction is invalid', () => {
      expect(() => new MarsRover(0, 0, 'Z')).toThrow('Invalid direction');
    });

    it('should throw an error when the start position is invalid', () => {
      expect(() => new MarsRover(-1, -1, 'N')).toThrow(
        'Invalid initial position',
      );
    });
  });

  describe('Complex Commands', () => {
    it('should handle multiple commands', () => {
      rover.execute('MMLRMM');
      expect(rover.x).toBe(0);
      expect(rover.y).toBe(4);
      expect(rover.direction).toBe('N');
    });

    it('should rotate to the right from North until it returns to North', () => {
      const directions = ['N', 'E', 'S', 'W'];
      directions.forEach((dir) => {
        rover.direction = dir;
        rover.rotateRight();
      });
      expect(rover.direction).toBe('N');
    });
  });

  describe('Invalid Input Tests', () => {
    it('should handle invalid commands gracefully', () => {
      expect(() => rover.execute('X')).toThrow('Invalid command');
    });
  });
});
