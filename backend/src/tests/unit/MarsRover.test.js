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

    it('should turn left when facin North', () => {
      rover.execute('L');
      expect(rover.direction).toBe('W');
    });

    it('should turn right when facin North', () => {
      rover.execute('R');
      expect(rover.direction).toBe('E');
    });
  });

  describe('Complex Commands', () => {
    it('should handle multiple commands', () => {
      rover.execute('MMLRMM');
      expect(rover.x).toBe(0);
      expect(rover.y).toBe(4);
      expect(rover.direction).toBe('N');
    });
  });

  describe('Invalid Input Tests', () => {
    it('should handle invalid commands gracefully', () => {
      expect(() => rover.execute('X')).toThrow('Invalid command');
    });
  });
});
