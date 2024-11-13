const { MarsRover } = require('../../../src/models/MarsRover');

describe('Mars Rover Unit Tests', () => {
  let rover;

  beforeEach(() => {
    rover = new MarsRover(0, 0, 'N');
  });

  describe('Initialization', () => {
    it('should initialize with correct position and direction', () => {
      expect(rover.x).toBe(0);
      expect(rover.y).toBe(0);
      expect(rover.direction).toBe('N');
    });

    it('should throw error for invalid initial direction', () => {
      expect(() => new MarsRover(0, 0, 'X')).toThrow('Invalid direction');
    });
  });

  describe('Basic Movement', () => {
    it('should move forward when facing North', () => {
      rover.execute('M');
      expect(rover.y).toBe(1);
      expect(rover.x).toBe(0);
    });

    it('should move forward when facing East', () => {
      rover.execute('RM');
      expect(rover.x).toBe(1);
      expect(rover.y).toBe(0);
    });

    it('should move backward when facing North', () => {
      rover.execute('B');
      expect(rover.y).toBe(-1);
      expect(rover.x).toBe(0);
    });
  });

  describe('Rotation', () => {
    it('should rotate left correctly', () => {
      const directions = ['N', 'W', 'S', 'E', 'N'];
      directions.forEach((expectedDir, index) => {
        expect(rover.direction).toBe(expectedDir);
        if (index < directions.length - 1) rover.execute('L');
      });
    });

    it('should rotate right correctly', () => {
      const directions = ['N', 'E', 'S', 'W', 'N'];
      directions.forEach((expectedDir, index) => {
        expect(rover.direction).toBe(expectedDir);
        if (index < directions.length - 1) rover.execute('R');
      });
    });
  });

  describe('Complex Commands', () => {
    it('should handle multiple commands', () => {
      rover.execute('MMLRMM');
      expect(rover.x).toBe(-1);
      expect(rover.y).toBe(3);
      expect(rover.direction).toBe('N');
    });
  });

  describe('Invalid Input Tests', () => {
    it('should handle invalid commands gracefully', () => {
      expect(() => rover.move('X')).to.throw('Invalid command');
    });
  });
});
